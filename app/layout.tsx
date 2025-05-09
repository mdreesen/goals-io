import type { Metadata } from "next";
import { Provider } from "./provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NetworkStatusProvider from '@/components/wrappers/NetworkStatusProvider';
import "./globals.css";
import { UseThemeProvider } from "@/components/wrappers/UseThemeProvider";
import { fetchSettings } from "@/actions/settings";

export const metadata: Metadata = {
  title: "Ascend",
  description: "Set habits, Achieve greatness.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const useSettings = await fetchSettings();
  const useDarkMode = useSettings.useDarkMode;


  return (
    <html lang="en" dir="ltr">
      <NetworkStatusProvider>
        <Provider>

            <body className={`${useDarkMode ? 'dark' : 'light'}`}>
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
