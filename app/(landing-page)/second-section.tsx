import Image from 'next/image';
import React from 'react';
import { PiArrowRight } from 'react-icons/pi';

const logos = [
  { image: "/logos/logoipsum-265.svg" },
  { image: "/logos/logoipsum-222.svg" },
  { image: "/logos/logoipsum-243.svg" },
  { image: "/logos/logoipsum-258.svg" },
  { image: "/logos/logoipsum-317.svg" },
  { image: "/logos/logoipsum-289.svg" },
  { image: "/logos/logoipsum-297.svg" },
  { image: "/logos/logoipsum-311.svg" },
  { image: "/logos/logoipsum-264.svg" },
  { image: "/logos/logoipsum-264.svg" },
];

const SecondSection = () => {
  return (
    <div className="pt-16 flex justify-center items-center flex-col">
      <div className="text-4xl w-3/4 text-center xl:text-5xl font-medium">
        Millions run on Bird every day
      </div>
      <div className="py-4 xl:w-1/4 text-center px-8">
        Powering the world&apos;s best teams, from next-generation startups to established enterprises.
      </div>
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
        Read customer stories <PiArrowRight className="ml-3 text-sm " />
      </div>

      <div className='grid grid-cols-3  xl:grid-cols-4 items-center justify-center  px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto'>
        {logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo.image}
              alt="logo"
              width={500}
              height={500}
              className=''
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
