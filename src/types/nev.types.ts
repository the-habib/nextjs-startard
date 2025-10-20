export type NavItem = {
  label: string;
  href: string;
  sub?: { label: string; href: string }[];
};
