import React from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";
import { contactInquiryOptions } from "../../../data";
import { useContactForm } from "../../../utils/feature";

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold tracking-wider uppercase text-slate-400">{label}</label>
      {children}
    </div>
  );
}

export default function Form() {
  const {
    form,
    submitted,
    ripple,
    handleChange,
    handleSubmit,
    handleReset,
  } = useContactForm();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-9 shadow-[0_4px_32px_rgba(15,17,23,0.07)]">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-7">Send a Message</h2>

      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
          <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
            <CheckIcon className="w-7 h-7" />
          </div>
          <p className="text-lg font-semibold text-slate-900">Message Sent!</p>
          <p className="text-sm text-slate-500">We'll get back to you within 24 hours.</p>
          <button onClick={handleReset} className="mt-4 text-blue-600 text-sm font-semibold underline">
            Send another
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full Name">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="John Doe"
              />
            </Field>
            <Field label="Email Address">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                placeholder="julianne@example.com"
              />
            </Field>
          </div>

          <Field label="Inquiry Type">
            <div className="relative">
              <select
                name="inquiry"
                value={form.inquiry}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 pr-10 text-sm text-slate-900 outline-none appearance-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              >
                {contactInquiryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 flex items-center justify-center">
                <ChevronDownIcon className="w-4 h-4" />
              </span>
            </div>
          </Field>

          <Field label="Message">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full min-h-[110px] resize-y bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Tell us more about your needs…"
            />
          </Field>

          <button
            onClick={handleSubmit}
            className="relative mt-2 w-full py-3 bg-blue-600 text-white font-semibold text-[15px] tracking-wide rounded-[20px] border-0 overflow-hidden transition-transform duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] active:translate-y-0"
          >
            {ripple && (
              <span
                className="absolute rounded-full bg-white/25 pointer-events-none"
                style={{
                  width: 120,
                  height: 120,
                  left: ripple.x - 60,
                  top: ripple.y - 60,
                  animation: "ripple 0.55s ease-out 1",
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
