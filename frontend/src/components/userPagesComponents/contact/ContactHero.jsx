import { contactHero } from "../../../data";

export default function ContactHero() {
  return (
    <div className="mb-14">
      <h1 className="font-display text-5xl md:text-6xl tracking-tight text-slate-900 mb-4 leading-[1.07]">
        {contactHero.title}
      </h1>
      <p className="text-slate-500 text-[15px] leading-relaxed max-w-md">
        {contactHero.description}
      </p>
    </div>
  );
}
