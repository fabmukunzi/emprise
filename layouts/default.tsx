import { Link } from "@nextui-org/react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen mx-32">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl pl-6 flex-grow pt-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
