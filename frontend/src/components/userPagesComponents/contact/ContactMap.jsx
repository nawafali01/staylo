export default function ContactMap() {
  return (
    <div className="mt-20">
      <div className="flex items-end justify-between mb-1">
        <h2 className="text-[28px] font-semibold tracking-tight text-slate-900">
          Global Headquarters
        </h2>
        <span className="text-[11px] font-bold tracking-widest uppercase text-blue-600">
          Manhattan, NY
        </span>
      </div>
      <p className="text-slate-500 text-sm mb-5">
        Available for in-person consultations by appointment.
      </p>

      <div className="rounded-2xl overflow-hidden h-72 relative border border-slate-200 group">
        <iframe
          title="The Ledger HQ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.185!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000"
          className="w-full h-full border-none grayscale-[60%] contrast-105 transition-all duration-500 group-hover:grayscale-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[65%] flex flex-col items-center pointer-events-none">
          <div className="w-4 h-4 bg-blue-600 rounded-tl-full rounded-tr-full rounded-bl-full rotate-[-45deg] shadow-[0_2px_10px_rgba(37,99,235,0.5)]" />
          <div className="mt-2 bg-white border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
            The Ledger HQ
          </div>
        </div>
      </div>
    </div>
  );
}
