import type { Metadata } from "next";
import { Provider } from "./provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ascend",
  description: "Set Habits. Achieve greatness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <Provider>
        <body>
          {children}
        </body>
      </Provider>

    </html>
  );
}
