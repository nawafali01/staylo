import { useState } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

const inputClass =
  "w-full bg-slate-50 border border-slate-200 rounded-[10px] px-3.5 py-2.5 text-sm text-slate-800 " +
  "placeholder:text-slate-400 outline-none transition-all duration-200 " +
  "focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:shadow-sm";

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: "Property Management",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [ripple, setRipple] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);
    if (form.name && form.email && form.message) {
      setTimeout(() => setSubmitted(true), 300);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", inquiry: "Property Management", message: "" });
  };

  return (
    <div className="bg-white rounded-2xl p-9 border border-slate-100 shadow-[0_4px_32px_rgba(15,17,23,0.07)]">
      <h2 className="text-[26px] font-semibold tracking-tight text-slate-900 mb-7">
        Send a Message
      </h2>

      {submitted ? (
        /* Success State */
        <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
            <CheckIcon className="w-7 h-7" />
          </div>
          <p className="text-xl font-semibold text-slate-900">Message Sent!</p>
          <p className="text-sm text-slate-500">We'll get back to you within 24 hours.</p>
          <button
            onClick={handleReset}
            className="mt-4 text-blue-600 text-sm font-semibold hover:underline"
          >
            Send another
          </button>
        </div>
      ) : (
        /* Form Fields */
        <div className="flex flex-col gap-4">

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full Name">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="John Doe"
              />
            </Field>
            <Field label="Email Address">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="julianne@example.com"
              />
            </Field>
          </div>

          {/* Inquiry Type */}
          <Field label="Inquiry Type">
            <div className="relative">
              <select
                name="inquiry"
                value={form.inquiry}
                onChange={handleChange}
                className={inputClass + " appearance-none pr-9 cursor-pointer"}
              >
                <option>Property Management</option>
                <option>Leasing Inquiry</option>
                <option>Tenant Support</option>
                <option>Investment Partnership</option>
                <option>General Question</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <ChevronDownIcon className="w-4 h-4" />
              </span>
            </div>
          </Field>

          {/* Message */}
          <Field label="Message">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={inputClass + " resize-y min-h-[110px]"}
              placeholder="Tell us more about your needs…"
            />
          </Field>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="relative mt-2 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] tracking-wide rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] active:translate-y-0"
          >
            {ripple && (
              <span
                className="absolute rounded-full bg-white/25 pointer-events-none animate-ping"
                style={{
                  width: 120, height: 120,
                  left: ripple.x - 60,
                  top: ripple.y - 60,
                  animationDuration: "0.55s",
                  animationIterationCount: 1,
                }}
              />
            )}
            Send Inquiry
          </button>

        </div>
      )}
    </div>
  );
}
