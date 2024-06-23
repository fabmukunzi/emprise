import DefaultLayout from '@/layouts/default';
import { DatePicker, Input, Select, SelectItem } from '@nextui-org/react';
import { ArrowLeft, ArrowRight, Cards, MapPin } from '@phosphor-icons/react';
import { CaretCircleDown } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div>
        <div className="relative bg-[url('https://logitrix-6eb9f.firebaseapp.com/images/backgroundImage.png')] bg-cover h-[28rem] p-10 text-white rounded-3xl w-full">
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          <div className="flex font-poppins relative z-10 flex-col justify-center leading-[5rem]">
            <h1>--The Himalayon Mountain Ranges</h1>
            <h1 className="text-6xl font-bold">Nepal Country</h1>
            <h1>
              -02<sup>o</sup>C Very Cold
            </h1>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <ArrowLeft
                  size={15}
                  className="border-2 p-3 h-12 w-12 rounded-full"
                />

                <ArrowRight
                  size={32}
                  className="border-2 p-3 h-12 w-12 rounded-full"
                />
              </div>
              <div className="flex w-72 leading-6 gap-4">
                <Cards
                  size={50}
                  className="text-black bg-white rounded-full p-3 h-12 w-16"
                />
                <div>
                  <p>We accept payments through all cards & Banking </p>
                  <Link href="#" className="font-medium text-xl underline">
                    Book Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white text-black w-[80%] mx-auto rounded-lg p-5 flex justify-around absolute left-0 right-0 -bottom-10">
            <div>
              <h1 className="text-xl font-bold">Location</h1>
              <Input
                variant="underlined"
                placeholder="Enter your destination"
                endContent={<MapPin size={20} />}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Activity</h1>
              <Select
                // label="Favorite Animal"
                variant='underlined'
                placeholder="Select an animal"
                labelPlacement="outside"
                className="max-w-xs"
                disableSelectorIconRotation
                selectorIcon={<CaretCircleDown size={32} />}
              >
                <SelectItem key="bungee">Bungee Jump</SelectItem>
              </Select>
            </div>
            <div>
              <h1 className="text-xl font-bold">Date</h1>
              <DatePicker />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
