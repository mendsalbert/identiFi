"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRef } from "react";

import { useMediaQuery } from "react-responsive";

import { useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import {
  IconBriefcase,
  IconIdBadge2,
  IconLockSquareRounded,
  IconShare,
} from "@tabler/icons-react";

const tabs = [
  {
    icon: (
      <IconIdBadge2 className="w-8 h-8 mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Create DID",
    description: "Get your DID on the blockchain.",
    more: (
      <div className="text-red-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },
  {
    icon: (
      <IconShare className="w-8 h-8 mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "Share DID",
    description: "Create ones, share and use everywhere ",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <IconLockSquareRounded className="w-8 h-8 mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Privacy ",
    description: "Control who sees your information",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <IconBriefcase className="w-8 h-8 mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Find Jobs",
    description: "Discover developer opportunities.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/RunningDoodle.svg",
  },
];

const HeroSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center flex flex-col ">
      <div
        className="
          font-medium
          2xl:w-1/3
          md:w-2/3
          xl:w-1/2
          lg:px-0
          px-8
          text-5xl
            xl:text-6xl     
            flex
            justify-center
            xl:font-medium
            xl:pt-14
            text-center 
            pt-6
            "
      >
        Your Digital Identity, Reinvented{" "}
      </div>

      <p
        className="
            text-2xl
            pt-4
            text-center
            w-2/3
            mx-auto
            "
      >
        Create Once, Identify Everywhere with{" "}
        <span className="text-sky-500 font-bold">IdentiFi</span>
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        <Link href="/">
          <Button className="py-1 ">
            <div className="flex items-center justify-center">
              <div className="text-lg">Create Identity</div>
              <div>
                <PiArrowRight className="ml-2 " />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className="pt-10 xl:pt-20 items-center justify-center">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="flex items-center justify-center mx-auto w-60 xl:w-80"
        />
      </div>
      {isSmallScreen ? (
        <div className="md:grid-cols-1 grid sm:grid-cols-2  place-content-center place-items-center mx-auto space-x-0  xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`
             xl:flex 
             justify-center 
             space-x-4
             xl:pt-4
             sm:my-10
            
             xl:my-0
             w-60
             h-36
             ${
               activeTab === tab
                 ? "border rounded-xl pt-2 bg-white "
                 : "shadow-md rounded-xl pt-2  bg-[#f6f5f4] m"
             }
           `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tab.description}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex  xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`
                xl:flex 
                justify-center 
                space-x-4
                xl:pt-4
                sm:my-10
               
                xl:my-0
                w-60
                h-36
                ${
                  activeTab === tab
                    ? "border rounded-xl pt-2 bg-white "
                    : "shadow-md rounded-xl pt-2  bg-[#f6f5f4] m"
                }
              `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tab.description}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
