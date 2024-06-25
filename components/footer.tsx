import { Button } from '@nextui-org/react';
import {
  ArrowRight,
  GlobeHemisphereEast,
  PlusCircle,
} from '@phosphor-icons/react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="mx-auto space-y-12 py-3">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-12 text-xl">
          <div>
            <span className="font-semibold uppercase flex items-center text-base gap-2">
              <PlusCircle size={25} /> Quick Links
            </span>
          </div>
          <p className="font-normal text-lg">Explore more catogories</p>
        </div>
        <div className="divide-x-2 divide-black text-base font-medium">
          <span className="inline-block px-2">0123-456-324-54</span>
          <span className="inline-block px-2">Hello@entrada.com</span>
        </div>
      </div>
      <div className="flex items-center w-full justify-between">
        <div>
          <p className="text-teal-600 text-lg">Get in touch</p>
          <p className="text-2xl font-semibold mt-3">Adventures Calling</p>
          <p className="text-2xl font-semibold">You Guys!</p>
        </div>
        <div className='flex gap-5'>
          <div className="p-2 w-fit h-fit text-white bg-teal-600 rounded-full">
            <GlobeHemisphereEast size={45} />
          </div>
          <div>
            <p>Our Offices</p>
            <p className='font-semibold'>Nepal, USA, India</p>
            <ArrowRight size={32} />
          </div>
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
