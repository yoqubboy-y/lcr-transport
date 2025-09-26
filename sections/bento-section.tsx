"use client";

import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";

export function BentoSection() {
  const title = "Why Choose LCR Transportation?";
  const description = "We're not just another trucking company. We're the rebels of the road, delivering excellence with attitude and innovation.";
  
  const items = [
    {
      id: 1,
      content: <FirstBentoAnimation />,
      title: "Real-Time Tracking & Communication",
      description: "Stay connected with your freight every mile of the journey. Our advanced tracking system keeps you informed with real-time updates and instant communication.",
    },
    {
      id: 2,
      content: <SecondBentoAnimation />,
      title: "Nationwide Network Coverage",
      description: "From coast to coast, our extensive network ensures your freight reaches its destination efficiently. We've got the roads covered, literally.",
    },
    {
      id: 3,
      content: (
        <ThirdBentoAnimation
          data={[95, 98, 97, 99, 96, 98, 100]}
          toolTipValues={[
            95, 98, 97, 99, 96, 98, 100, 99, 98, 100,
          ]}
        />
      ),
      title: "On-Time Delivery Excellence",
      description: "Our track record speaks for itself. We maintain industry-leading on-time delivery rates because we understand that time is money.",
    },
    {
      id: 4,
      content: <FourthBentoAnimation once={false} />,
      title: "Innovative Logistics Solutions",
      description: "We don't just move freight, we optimize your entire supply chain. Our smart logistics approach saves you time, money, and headaches.",
    },
  ];

  return (
    <section
      id="bento"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px] group"
            >
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>
              <div className="flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg tracking-tighter font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
