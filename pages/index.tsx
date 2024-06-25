import Destinations from '@/components/destinations';
import DefaultLayout from '@/layouts/default';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  DatePicker,
  Image,
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react';
import {
  ArrowLeft,
  ArrowRight,
  Cards,
  CaretLeft,
  CaretRight,
  Heart,
  MagnifyingGlass,
  MapPin,
  Star,
  Umbrella,
} from '@phosphor-icons/react';
import { CaretCircleDown } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="text-black">
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
                variant="underlined"
                placeholder="Select an animal"
                labelPlacement="outside"
                className="w-40"
                disableSelectorIconRotation
                defaultSelectedKeys={['bungee']}
                selectorIcon={<CaretCircleDown size={32} />}
              >
                <SelectItem key="bungee">Bungee Jump</SelectItem>
              </Select>
            </div>
            <div>
              <h1 className="text-xl font-bold">Date</h1>
              <DatePicker />
            </div>
            <div>
              <Button className="h-14 w-12 bg-teal-600">
                <MagnifyingGlass className="font-bold text-white" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative my-32">
          <div className="flex justify-between my-10">
            <div className="">
              <h1 className="text-3xl font-bold">Select Category</h1>
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
          <div className="flex gap-5 w-screen justify-between overflow-clip">
            {Array(7)
              .fill(null)
              .map(() => (
                <Card className="border !min-w-[300px] border-teal-100 rounded-md">
                  <CardHeader className="relative">
                    <Chip className="flex text-orange-400 bg-orange-400/40 absolute right-3 top-3">
                      4.9
                    </Chip>
                  </CardHeader>
                  <CardBody>
                    <Umbrella className="text-teal-600" size={50} />
                    <h1 className="font-bold text-xl my-5">Beach Activity</h1>
                    <p className="text-gray-600">196 Activities</p>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
        <div className="relative my-32">
          <div className="flex justify-between my-10">
            <div className="">
              <h1 className="text-3xl font-bold">Trending 2024</h1>
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
          <div className="flex gap-5 overflow-clip justify-between w-screen">
            {Array(5)
              .fill(null)
              .map(() => (
                <Card className="!min-w-[340px] shadow-none border-none rounded-md p-0">
                  <CardBody className="overflow-visible p-0 relative">
                    <Chip
                      variant="flat"
                      color="danger"
                      className="flex absolute z-20 right-3 top-3"
                    >
                      4.9
                    </Chip>
                    <Image
                      shadow="sm"
                      radius="sm"
                      width="100%"
                      alt="Image"
                      className="w-full object-cover z-10 h-[180px]"
                      src="https://logitrix-6eb9f.firebaseapp.com/images/waterCargo.png"
                    />
                  </CardBody>
                  <CardFooter className="px-2 flex-col">
                    <div className="justify-between mx-2 flex w-full">
                      <div>
                        <h1 className="font-semibold text-base my-0">
                          Train Tour skyline
                        </h1>
                        <p className="text-gray-600 text-sm">
                          Hiking Tour| Stoke on trent
                        </p>
                      </div>
                      <Heart className="text-gray-600" size={25} />
                    </div>
                    <div className="justify-between my-4 flex w-full">
                      <div>
                        <p className="text-sm text-gray-600">from</p>
                        <p className="font-semibold text-3xl">$895</p>
                        <p className="text-sm text-gray-600">*price varies</p>
                      </div>
                      <div>
                        <div className="flex">
                          {Array(5)
                            .fill(null)
                            .map(() => (
                              <Star size={14} weight="fill" color="orange" />
                            ))}
                        </div>
                        <p className="text-xs text-gray-600 text-center">
                          4.5(108)
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
        <Destinations />
        <div className="relative my-32">
          <div className="flex justify-between my-10">
            <div className="">
              <h1 className="text-3xl font-bold">Best Seller</h1>
              <p className="my-3 text-gray-600">
                Sost Brilliant reasons Entrada should be your one-stop-shop!
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="bg-teal-500 text-white rounded-3xl p-5 h-11">
                Check All
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full justify-between">
            {Array(3)
              .fill(null)
              .map(() => (
                <Card className="!w-full !h-[300px] shadow-none border-none rounded-3xl p-0">
                  <CardBody className="overflow-visible p-0 relative">
                    <div className="bg-black/40 rounded-3xl z-20 absolute min-h-[205px] min-w-full"></div>
                    <Image
                      shadow="sm"
                      radius="sm"
                      width="100%"
                      height="100%"
                      alt="Image"
                      className="w-full h-[205px] object-cover z-10 rounded-3xl"
                      src="https://logitrix-6eb9f.firebaseapp.com/images/planeCargo.png"
                    />
                  </CardBody>
                  <CardFooter className="">
                    <div className="text-center">
                      <p className="text-lg font-semibold">Train Tour Skyline</p>
                      <p className="text-gray-500 font-medium text-xs">
                        Checkout Daily deals with promotion on hotels.
                      </p>
                      <p className="text-gray-500 font-medium text-xs">
                        Easy & Fast Booking
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
