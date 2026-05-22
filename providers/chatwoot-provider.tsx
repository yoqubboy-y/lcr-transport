"use client";

import Script from "next/script";

declare global {
  interface Window {
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
    $chatwoot: {
      setUser: (id: string, attrs: Record<string, unknown>) => void;
      setCustomAttributes: (attrs: Record<string, unknown>) => void;
      reset: () => void;
    };
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL!;
const WEBSITE_TOKEN = process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN!;

export function ChatwootProvider() {
  return (
    <Script
      id="chatwoot-sdk"
      strategy="lazyOnload"
      src={`${BASE_URL}/packs/js/sdk.js`}
      onLoad={() => {
        window.chatwootSDK.run({
          websiteToken: WEBSITE_TOKEN,
          baseUrl: BASE_URL,
        });
      }}
    />
  );
}
