import { Metadata, Viewport } from "next";
import { MetadataConfig } from "@/types/seo.types";

export const defaultSEOConfig: MetadataConfig = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Your Site Name - Default Title",
  description: "Your default site description for SEO",
  keywords: ["nextjs", "react", "typescript", "seo"],
  author: "Your Name",
  themeColor: "#000000",
  ogType: "website",
  ogImage: {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Your Site Name",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Site Name",
    description: "Your default site description",
    creator: "@yourhandle",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export function generateMetadata(
  overrides: Partial<MetadataConfig> = {}
): Metadata {
  const config = { ...defaultSEOConfig, ...overrides };

  return {
    // Basic metadata
    title: {
      default: config.title,
      template: `%s | ${config.title}`,
    },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: config.author }],
    creator: config.author,
    publisher: config.author,

    // robots.txt
    robots: config.robots,

    // Verification
    verification: config.verification,

    // Open Graph
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.canonicalUrl || config.metadataBase.toString(),
      siteName: config.title,
      images: config.ogImage ? [config.ogImage] : undefined,
      locale: "en_US",
      type: config.ogType,
    },

    // Twitter
    twitter: config.twitter,

    // Alternates
    alternates: {
      canonical: config.canonicalUrl,
    },

    // Other metadata
    metadataBase: config.metadataBase,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export const viewportConfig: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: defaultSEOConfig.themeColor,
};
