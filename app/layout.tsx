import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"]});
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
          <main className="flex flex-col gap-24">
            {children}
            <ContactUsSection />
            <Footer/>
          </main>
        </Providers>
      </body>
    </html>
  );
}
