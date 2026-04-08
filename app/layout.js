import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/business";

export const metadata = {
  metadataBase: new URL("https://roosgaragedoorscapetown.co.za"),
  title: {
    default: "Roos Garage Doors Cape Town | Meranti, Aluminium & Steel Since 2012",
    template: "%s | Roos Garage Doors Cape Town",
  },
  description: "Hand-built meranti, aluminium, and Aluzinc steel garage doors in Cape Town. Sole Eazylift automation supplier. Family-run workshop in Brackenfell since 2012.",
  keywords: ["garage doors cape town", "meranti garage doors", "aluminium garage doors", "garage door motor cape town", "garage door repairs cape town"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://roosgaragedoorscapetown.co.za",
    siteName: BUSINESS.name,
    title: "Roos Garage Doors Cape Town — Built in Brackenfell Since 2012",
    description: "Meranti, aluminium, and steel garage doors hand-built in Cape Town. Sole Eazylift automation supplier.",
  },
  twitter: { card: "summary_large_image", site: "@RGD_CPT" },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://roosgaragedoorscapetown.co.za/#business",
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  image: "https://roosgaragedoorscapetown.co.za/og.jpg",
  priceRange: "R R",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postal,
    addressCountry: BUSINESS.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "08:00", closes: "16:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "15:00" },
  ],
  sameAs: [BUSINESS.social.twitter],
  areaServed: { "@type": "City", name: "Cape Town" },
  foundingDate: BUSINESS.founded,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;800&family=Manrope:wght@400;500;700&display=swap"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#111315" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
