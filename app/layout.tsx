import type { Metadata } from "next";
import { Provider } from "./provider";
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
          </body>
        </Provider>
      </NetworkStatusProvider>
    </html>
  );
}
