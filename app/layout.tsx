import type { Metadata } from "next";
import { Provider } from "./provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NetworkStatusProvider from '@/components/wrappers/NetworkStatusProvider';
import "./globals.css";

export const metadata: Metadata = {
  title: "Ascend",
  description: "Set habits, Achieve greatness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <NetworkStatusProvider>
        <Provider>
          <body>
            {children}

            {/* Vercel Analytics */}
            <Analytics />

            {/* Vercel Speed insights */}
            <SpeedInsights />

          </body>
        </Provider>
      </NetworkStatusProvider>
    </html>
  );
}
