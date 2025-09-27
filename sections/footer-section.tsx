"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function FooterSection() {
  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-10">
        {/* Company Name and Description */}
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-xs mx-0">
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold text-primary">LCR Transportation, Inc</p>
          </div>
          <p className="tracking-tight text-muted-foreground font-medium">
            Delivering excellence with attitude and innovation.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="pt-5 md:w-1/2">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between gap-y-5 lg:pl-10">
            {/* Home */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">
                <a href="#hero">Home</a>
              </li>
            </ul>

            {/* About Us */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">
                <a href="#bento">About Us</a>
              </li>
            </ul>

            {/* Contact */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">
                <a href="#contact">Contact</a>
              </li>
            </ul>

            {/* Legal */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="mb-2 text-sm font-semibold text-primary">
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Flickering Grid Section */}
      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text="Stay Weird, Stay Different"
            fontSize={90}
            className="h-full w-full"
            squareSize={2}
            gridGap={3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}
