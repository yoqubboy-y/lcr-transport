"use client";

import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[400px] rounded-md border bg-background p-4 shadow-lg">
      <div className="flex gap-2">
        <div className="flex grow flex-col gap-3">
          <div className="space-y-1">
            <p className="font-medium text-sm">We Value Your Privacy 🍪</p>
            <p className="text-muted-foreground text-sm">
              We use cookies to improve your experience, and show personalized content.
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={accept}>Accept</Button>
            <Button size="sm" variant="outline" onClick={decline}>Decline</Button>
          </div>
        </div>
        <Button
          aria-label="Close notification"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          variant="ghost"
          onClick={decline}
        >
          <XIcon
            aria-hidden="true"
            className="opacity-60 transition-opacity group-hover:opacity-100"
            size={16}
          />
        </Button>
      </div>
    </div>
  );
}
