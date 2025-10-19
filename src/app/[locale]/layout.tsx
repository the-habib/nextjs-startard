import {notFound} from 'next/navigation';
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import { generateMetadata, viewportConfig } from '@/lib/seo-config';


import { routing } from '@/i18n/routing';

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

const themes = ["light", "dark", "aliceblue", "darkgray", "turquoise", "offwhite"];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

// Generate static metadata for root layout
export const metadata: Metadata = generateMetadata();

export const viewport: Viewport = viewportConfig;


const NextStararAppRootLayout = async ({ children, params }: Props) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  let messages;
  
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
    
    // console.log("messages:", messages)
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          enableSystem
          themes={themes}
          attribute="class"
          value={{
            dark: 'dark',
            light: 'light',
            offwhite: 'offwhite',
            darkgray: 'darkgray',
            turquoise: 'turquoise',
            aliceblue: 'aliceblue',
          }}
>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};


export default NextStararAppRootLayout;
