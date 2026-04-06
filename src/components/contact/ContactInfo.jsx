import React from "react";
import ContactItem from "./ContactItem";
import { contactDetails, contactIconMap, contactOffice } from "../../data";
import { formatLineBreaks } from "../../utils/feature";

export default function ContactInfo() {
  return (
    <div>
     
      <div className="flex flex-col gap-1 mb-8">
        {contactDetails.map((item) => {
          const Icon = contactIconMap[item.icon];
          return (
            <ContactItem
              key={item.label}
              icon={Icon && <Icon className="w-4 h-4" />}
              label={item.label}
            >
              {formatLineBreaks(item.value).map((line, i, lines) => (
                <React.Fragment key={i}>
                  {line}
                  {i < lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </ContactItem>
          );
        })}
      </div>

      
      <div className="rounded-2xl overflow-hidden relative group">
        <img
          src={contactOffice.image}
          alt="Office interior"
          className="w-full h-52 object-cover transition-all duration-500 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
        <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-md tracking-wide">
          {contactOffice.name}
        </div>
      </div>
    </div>
  );
}
