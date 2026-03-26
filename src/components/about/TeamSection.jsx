const team = [
  { name: "Elena Vance", role: "Chief Curator", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Julian Thorne", role: "Head of Architecture", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sarah Jenkins", role: "Director of Operations", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Marcus Reed", role: "Tech Lead", img: "https://randomuser.me/api/portraits/men/75.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Our People</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">Meet Our Team</h2>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed self-end">
          Our diverse team of curators, technologists, and architects are dedicated to redefining the rental experience.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-gray-100"
            />
            <p className="mt-3 font-semibold text-gray-900 text-sm">{member.name}</p>
            <p className="text-gray-400 text-xs mt-0.5">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
