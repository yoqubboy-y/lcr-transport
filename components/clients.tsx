import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const firstRowClients = [
  { src: "/clients/arrive.png", alt: "Arrive", width: 120, height: 60 },
  { src: "/clients/nolan.png", alt: "Nolan", width: 120, height: 60 },
  { src: "/clients/echo.svg", alt: "Echo", width: 120, height: 60 },
  { src: "/clients/jbhunt.svg", alt: "JB Hunt", width: 120, height: 60 },
  { src: "/clients/tql.svg", alt: "TQL", width: 120, height: 60 },
  { src: "/clients/mode.jpg", alt: "TQL", width: 120, height: 60 },
];

const secondRowClients = [
  { src: "/clients/usps.svg", alt: "USPS", width: 120, height: 60 },
  { src: "/clients/schneider.svg", alt: "Schneider", width: 120, height: 60 },
  { src: "/clients/Landstar_System_logo.svg", alt: "Landstar", width: 120, height: 60 },
  { src: "/clients/chrobinson.svg", alt: "CH Robinson", width: 120, height: 60 },
  { src: "/clients/rxo.svg", alt: "RXO", width: 120, height: 60 },
  { src: "/clients/molo.jpg", alt: "TQL", width: 120, height: 60 },
];

export default function Clients() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Our Trusted Partners</h2>
      
      {/* First Row */}
      <div className="mb-4">
        <Marquee className="py-4" repeat={4}>
          {firstRowClients.map((client, index) => (
            <Image
              key={`first-${index}`}
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              className="h-12 w-auto max-w-[120px] object-contain mx-6 md:mx-8 transition-all duration-300 hover:scale-110"
            />
          ))}
        </Marquee>
      </div>

      {/* Second Row - Reverse direction */}
      <div>
        <Marquee className="py-4" repeat={4} reverse>
          {secondRowClients.map((client, index) => (
            <Image
              key={`second-${index}`}
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              className="h-12 w-auto max-w-[120px] object-contain mx-6 md:mx-8 transition-all duration-300 hover:scale-110"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
