// Static "trusted by" band: client logos, original colors, tight-cropped files.
// Desktop: eight equal slots — each logo caps at a uniform height and its slot
// width, so wide logos (TVS, Livguard) never dominate. Mobile: slow marquee.
const clients = [
  { name: 'TVS', src: '/logo/tvs.png' },
  { name: 'Tata Motors', src: '/logo/tata-cars.png' },
  { name: 'Tata EV', src: '/logo/tata-ev.png' },
  { name: 'Tanishq', src: '/logo/tanishq.png' },
  { name: 'Mia by Tanishq', src: '/logo/mia.png' },
  { name: 'IRTH House of Titan', src: '/logo/irth.png' },
  { name: 'SKINN', src: '/logo/skinn.png' },
  { name: 'Livguard', src: '/logo/livguard.png' },
];

function Logo({ client }: { client: (typeof clients)[number] }) {
  return (
    <img
      src={client.src}
      alt={client.name}
      title={client.name}
      className="h-9 md:h-11 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
      draggable={false}
    />
  );
}

export default function ClientStrip() {
  return (
    <section className="bg-paper border-b-2 border-navy">
      <div className="wrap pt-4 pb-5 md:pt-5 md:pb-6">
        <span className="eyebrow !text-navy/60 block mb-3 md:mb-4">Trusted by</span>

        {/* Mobile: slow marquee */}
        <div className="marquee-wrap overflow-hidden md:hidden">
          <ul className="marquee-track marquee-track-slow">
            {[...clients, ...clients].map((client, i) => (
              <li key={`${client.name}-${i}`} className="flex items-center shrink-0">
                <Logo client={client} />
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop: equal slots, one row */}
        <ul className="hidden md:flex items-center gap-8">
          {clients.map((client) => (
            <li key={client.name} className="flex items-center justify-center flex-1 min-w-0">
              <Logo client={client} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
