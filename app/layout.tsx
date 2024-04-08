import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";

const raleway = Raleway({ subsets: ["latin"], fallback: ["sans-serif"] });
export const mont = Montserrat({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "WORKSPACE LEASING",
  description: "Askar DEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>
          <main>
        {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
