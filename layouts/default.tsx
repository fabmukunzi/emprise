import { Link } from '@nextui-org/react';

import { Head } from './head';

import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen mx-32">
      <Head />
      <Navbar />
      <main className="container mx-auto px- flex-grow pt-10">{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
