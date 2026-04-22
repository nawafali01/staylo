import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function ContactInfo() {
  return (
    <div>
      <div className="flex flex-col gap-1 mb-8">
        <ContactItem icon={<EnvelopeIcon className="w-4 h-4" />} label="Email Us">
          concierge@theledger.com
        </ContactItem>

        <ContactItem icon={<PhoneIcon className="w-4 h-4" />} label="Call Us">
          +1 (555) 234-8890
        </ContactItem>

        <ContactItem icon={<MapPinIcon className="w-4 h-4" />} label="Visit Us">
          450 Architectural Plaza
          <br />
          Suite 1200, Manhattan, NY
        </ContactItem>
      </div>

      <div className="rounded-2xl overflow-hidden relative group">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
          alt="Office interior"
          className="w-full h-52 object-cover transition-all duration-500 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
        <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-md tracking-wide">
          Our Manhattan Office
        </div>
      </div>
    </div>
  );
}
