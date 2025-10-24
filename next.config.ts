import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  // i18n: {
  //   localeDetection: false,
  //   defaultLocale: 'en',
  //   locales: locales,
  // },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
