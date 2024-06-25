import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto space-y-12 max-w-7xl py-3">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-12 text-xl">
          <div>
            <span className="font-bold uppercase">Quick Links</span>
          </div>
          <p className="font-normal">Explore more catogories</p>
        </div>
        <div className="divide-x-2 divide-black text-xl font-medium">
          <span className="inline-block px-2">0123-456-324-54</span>
          <span className="inline-block px-2">Hello@entrada.com</span>
        </div>
      </div>
      <div className="flex items-center w-full border-y-1 py-12 border-black justify-between">
        <div className="flex gap-12 text-xl">
          <div>
            <span className="font-bold uppercase">Quick Links</span>
          </div>
          <p className="font-normal">Explore more catogories</p>
        </div>
        <div className="divide-x-2 divide-black text-xl font-medium">
          <span className="inline-block px-2">0123-456-324-54</span>
          <span className="inline-block px-2">Hello@entrada.com</span>
        </div>
      </div>
      <div className="flex items-center w-full pb-20 border-black justify-between">
        <div className="flex gap-12 text-xl">
          <div>
            <span className="font-bold uppercase">Quick Links</span>
          </div>
          <p className="font-normal">Explore more catogories</p>
        </div>
        <div className="divide-x-2 divide-black text-xl font-medium">
          <span className="inline-block px-2">0123-456-324-54</span>
          <span className="inline-block px-2">Hello@entrada.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;