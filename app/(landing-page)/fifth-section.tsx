"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useState } from "react";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiClockAfternoonLight,
  PiCompassLight,
  PiFileThin,
  PiHeadset,
  PiMegaphoneLight,
  PiRocketLaunchFill,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const tabs = [
  {
    icon: <PiSparkleLight />,
    name: "Engineering",
    image: "/assets/DancingDoodle.svg",
  },
  {
    icon: <PiBookOpenTextLight />,
    name: "Design",
    image: "/assets/DogJumpDoodle.svg",
  },
  {
    icon: <PiRocketLaunchFill />,
    name: "Product",
    image: "/assets/MeditatingDoodle.svg",
  },
  {
    icon: <PiMegaphoneLight />,
    name: "Marketing",
    image: "/assets/ReadingDoodle.svg",
  },
  {
    icon: <PiCompassLight />,
    name: "Operations",
    image: "/assets/SittingDoodle.svg",
  },
  {
    icon: <PiHeadset />,
    name: "HR",
    image: "/assets/SleekDoodle.svg",
  },
];

const FifthSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className=" relative flex justify-center items-center flex-col px-8 md:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
      <div className="pt-20 lg:pt-0 text-3xl xl:text-5xl font-medium text-center pb-8">
        Every team, side-by-side
      </div>

      <div className="grid grid-cols-4  md:grid-cols-6 md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  ">
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            className={`
              flex 
            p-1
              md:p-8
             
      
                cursor-pointer
        
                ${
                  activeTab.name === tab.name
                  ? "rounded-md md:rounded-xl bg-[#f6f5f4]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 "
                  : "md:bg-[#f6f5f4]   rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                } `
            }
                
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col   items-center md:justify-center mx-auto">
              <div className="hidden md:flex text-4xl">{tab.icon}</div>
              <div className="font-medium text-sm  xl:text-lg mt-1">
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="py-10   lg:px-16 xl:px-0 md:px-16  w-full ">
        {activeTab && (
          <div className=" flex justify-center items-center flex-col  ">
            <Image
              src={activeTab.image}
              width={1025}
              height={500}
              alt="logo"
              className="
                w-full
             border
             p-20
             xl:p-40
             rounded-xl
          
             
                "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FifthSection;
