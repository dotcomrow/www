import type { Metadata, Viewport } from "next";
import 'tailwindcss/tailwind.css';
import { Providers } from "./Providers";
import { headers } from 'next/headers'
import Header from "@component/layout/header/Header";
import Footer from "@component/layout/footer/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import "@styles/global.css";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Suncoast Systems",
  description: "Suncoast Systems is a software development company that specializes in web and mobile applications.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next15", "pwa", "next-pwa"],
  authors: [
    {
      name: "DotcomRow",
      url: "https://www.linkedin.com/in/dotcomrow",
    },
  ]
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  initialScale: 1,
  minimumScale: 1,
  width: "device-width",
  viewportFit: "cover",
  maximumScale: 1,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  // read the custom x-url header
  const header_url = headerList.get('x-url') || "";

  var locationHeaders = [
    { name: 'x-vercel-ip-city', value: headerList.get('x-vercel-ip-city') || '' },
    { name: 'x-vercel-ip-country', value: headerList.get('x-vercel-ip-country') || '' },
    { name: 'x-vercel-ip-latitude', value: headerList.get('x-vercel-ip-latitude') || '' },
    { name: 'x-vercel-ip-longitude', value: headerList.get('x-vercel-ip-longitude') || '' },
    { name: 'x-vercel-ip-country-region', value: headerList.get('x-vercel-ip-country-region') || '' },
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={header_url}>
        <Providers>
          <Header/>
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-ELP6DTZ8ZC" />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            if ("serviceWorker" in navigator) {
              // Register a service worker hosted at the root of the
              // site using the default scope.
              navigator.serviceWorker.register("./sw.js").then(
                (registration) => {
                  console.log("Service worker registration succeeded:", registration);
                },
                (error) => {
                  console.error('Service worker registration failed:', error);
                }
              );
            } else {
              console.error("Service workers are not supported.");
            }
          `,
        }}
      />
    </html>
  );
}
