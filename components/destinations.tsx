import { Card, CardBody, CardFooter, Chip, Image } from '@nextui-org/react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import React from 'react';

const Destinations = () => {
  return (
    <div className="relative my-32">
      <div className="flex justify-between my-10">
        <div className="">
          <h1 className="text-3xl font-bold">Top Destinations</h1>
          <p className="my-3 text-gray-600">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
          </p>
        </div>
        <div className="flex gap-2">
          <CaretLeft
            size={15}
            className="border-2 border-gray-600 text-gray-600 p-3 h-12 w-12 rounded-full"
          />
          <CaretRight
            size={32}
            className="border-2 bg-teal-600 text-white p-3 h-12 w-12 rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-9 gap-5 w-full justify-between">
        <Card className=" !h-[235px] col-span-2 shadow-none border-none rounded-3xl p-0">
          <div className="bg-black/40 z-20 absolute min-h-full min-w-full"></div>
          <CardBody className="overflow-visible p-0 relative">
            <Chip className="flex bg-white  /50 text-orange-400 absolute z-20 left-3 top-3">
              4.9
            </Chip>
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              height="100%"
              alt="Image"
              className="w-full object-cover z-10"
              src="https://logitrix-6eb9f.firebaseapp.com/images/waterCargo.png"
            />
          </CardBody>
          <CardFooter className="absolute left-5 bottom-5  z-30">
            <div>
              <p className="text-white text-lg font-medium">Vietnam</p>
              <p className="text-white text-sm">Waterfall</p>
            </div>
          </CardFooter>
        </Card>
        <Card className=" row-span-2 col-span-3 !h-[500px] shadow-none border-none rounded-3xl p-0">
          <div className="bg-black/40 z-20 absolute min-h-full min-w-full"></div>
          <CardBody className="overflow-visible p-0 relative">
            <Chip className="flex bg-white  /50 text-orange-400 absolute z-20 left-3 top-3">
              4.9
            </Chip>
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              height="100%"
              alt="Image"
              className="w-full object-cover z-10"
              src="https://logitrix-6eb9f.firebaseapp.com/images/waterCargo.png"
            />
          </CardBody>
          <CardFooter className="absolute left-5 bottom-5  z-30">
            <div>
              <p className="text-white text-lg font-medium">Vietnam</p>
              <p className="text-white text-sm">Waterfall</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-4  !h-[240px] shadow-none border-none rounded-3xl p-0">
          <div className="bg-black/40 z-20 absolute min-h-full min-w-full"></div>
          <CardBody className="overflow-visible p-0 relative">
            <Chip className="flex bg-white  /50 text-orange-400 absolute z-20 left-3 top-3">
              4.9
            </Chip>
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              height="100%"
              alt="Image"
              className="w-full object-cover z-10"
              src="https://logitrix-6eb9f.firebaseapp.com/images/waterCargo.png"
            />
          </CardBody>
          <CardFooter className="absolute left-5 bottom-5  z-30">
            <div>
              <p className="text-white text-lg font-medium">Vietnam</p>
              <p className="text-white text-sm">Waterfall</p>
            </div>
          </CardFooter>
        </Card>
        <Card className=" !h-[235px] col-span-2 shadow-none border-none rounded-3xl p-0">
          <div className="bg-black/40 z-20 absolute min-h-full min-w-full"></div>
          <CardBody className="overflow-visible p-0 relative">
            <Chip className="flex bg-white  /50 text-orange-400 absolute z-20 left-3 top-3">
              4.9
            </Chip>
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              height="100%"
              alt="Image"
              className="w-full object-cover z-10"
              src="https://logitrix-6eb9f.firebaseapp.com/images/waterCargo.png"
            />
          </CardBody>
          <CardFooter className="absolute left-5 bottom-5  z-30">
            <div>
              <p className="text-white text-lg font-medium">Vietnam</p>
              <p className="text-white text-sm">Waterfall</p>
            </div>
          </CardFooter>
        </Card>
        <Card className=" row-span-2 col-span-2 !h-[230px] shadow-none border-none rounded-3xl p-0">
          <div className="bg-black/40 z-20 absolute min-h-full min-w-full"></div>
          <CardBody className="overflow-visible p-0 relative">
            <Chip className="flex bg-white  /50 text-orange-400 absolute z-20 left-3 top-3">
              4.9
            </Chip>
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              height="100%"
              alt="Image"
              className="w-full object-cover z-10"
              src="https://logitrix-6eb9f.firebaseapp.com/images/waterCargo.png"
            />
          </CardBody>
          <CardFooter className="absolute left-5 bottom-5  z-30">
            <div>
              <p className="text-white text-lg font-medium">Vietnam</p>
              <p className="text-white text-sm">Waterfall</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-2  !h-[230px] shadow-none border-none rounded-3xl p-0">
          <div className="bg-black/40 z-20 absolute min-h-full min-w-full"></div>
          <CardBody className="overflow-visible p-0 relative">
            <Chip className="flex bg-white  /50 text-orange-400 absolute z-20 left-3 top-3">
              4.9
            </Chip>
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              height="100%"
              alt="Image"
              className="w-full object-cover z-10"
              src="https://logitrix-6eb9f.firebaseapp.com/images/waterCargo.png"
            />
          </CardBody>
          <CardFooter className="absolute left-5 bottom-5  z-30">
            <div>
              <p className="text-white text-lg font-medium">Vietnam</p>
              <p className="text-white text-sm">Waterfall</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Destinations;
