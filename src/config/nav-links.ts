import { NavItem } from "@/types/nev.types";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    sub: [
      { label: "AI Suite", href: "/products/ai-suite" },
      { label: "Data Tools", href: "/products/data-tools" },
      { label: "Integrations", href: "/products/integrations" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    sub: [
      { label: "For Students", href: "/solutions/students" },
      { label: "For Educators", href: "/solutions/educators" },
      { label: "For Researchers", href: "/solutions/researchers" },
    ],
  },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
];
