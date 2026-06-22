import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Fade Room | Premium Barbershop in Tucson, AZ",
  description:
    "The Fade Room is Tucson's premier barbershop offering signature fades, beard sculpting, hot towel shaves, and more. Walk-ins and appointments welcome.",
  keywords: [
    "barbershop",
    "Tucson barbershop",
    "fade",
    "haircut",
    "beard trim",
    "hot towel shave",
    "Tucson AZ",
    "The Fade Room",
  ],
  openGraph: {
    title: "The Fade Room | Premium Barbershop in Tucson, AZ",
    description:
      "Tucson's premier barbershop. Signature fades, beard sculpting, hot towel shaves, and more.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "The Fade Room",
  description:
    "Premium barbershop in Tucson, AZ offering signature fades, beard sculpting, hot towel shaves, and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    postalCode: "85701",
    addressCountry: "US",
  },
  telephone: "+1-520-555-0199",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
      description: "By appointment only",
    },
  ],
  priceRange: "$$",
  url: "https://thefaderoom.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-jet text-clean">
        {children}
      </body>
    </html>
  );
}
