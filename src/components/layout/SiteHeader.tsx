import ClientNavBar from "@/components/layout/ClientNavBar";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-header-glass shadow-header">
      <ClientNavBar widthClass="max-w-[1280px]" />
    </header>
  );
}
