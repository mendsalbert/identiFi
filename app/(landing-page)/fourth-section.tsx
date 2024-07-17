"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Visualize, filter & sort any way you want",
    subheading:
      "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that is most helpful to you.",
    images: [
      { title: "Board", picture: "/assets/ZombieingDoodle.svg" },
      { title: "Table", picture: "/assets/SprintingDoodle.svg" },
      { title: "Goal", picture: "/assets/UnboxingDoodle.svg" },
      { title: "AI", picture: "/assets/RollingDoodle.svg" },
      { title: "Note", picture: "/assets/DogJumpDoodle.svg" },
      { title: "List", picture: "/assets/RunningDoodle.svg" },
    ],
    description: "Choose from a variety of colors",
  },
  {
    icon: <PiEyeLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Customize the info you track",
    subheading:
      "Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.",

    image: "/assets/DumpingDoodle.svg",
  },
  {
    icon: <PiPaletteLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Choose from a variety of colors",
    subheading:
      "Everything is customizable. Choose your own colors, icons, and more to make Bird work for you.",
    image: "/assets/CoffeeDoddle.svg",
  },
];

type Tab = {
  icon: JSX.Element;
  header: string;
  subheading: string;
  images?: { title: string; picture: string }[];
  description?: string;
  image?: string;
};

const FourthSection = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
    setActiveImageIndex(0); // Reset activeImageIndex when clicking a new tab
  };

  return (
    <>
      <div className="flex flex-col  pt-20 xl:py-32 items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
          Powerful building blocks
        </div>
        <div className="grid xl:grid-cols-4  md:grid-cols-2 md:row-span-1  gap-4  xl:gap-6 mt-8  px-8 md:px-16 xl:px-0 xl:w-3/4  2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? " xl:col-span-4 xl:row-span-3  md:col-span-2   flex-col  xl:flex-col"
                  : "xl:col-span-2 xl:row-span-3 flex-col "
              } bg-[#f6f5f4] p-6 rounded-xl  flex `}
            >
              <div className="flex flex-col ">
                {tab.icon}
                <div className="text-lg font-medium mt-2">{tab.header}</div>
                <div className=" mt-2 ">{tab.subheading}</div>
              </div>
              <>
                {index === 0 && tab.images && (
                  <div className="">
                    <Image
                      src={tab.images[activeImageIndex].picture}
                      alt={`${tab.images[activeImageIndex].title} Image`}
                      width={500}
                      height={500}
                      className="
             flex justify-center my-10 xl:my-16 rounded-xl
             mx-auto

                   "
                    />

                    <div className="grid grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 xl:w-1/2 mx-auto gap-1 xl:space-x-2">
                      {tab.images.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`${
                            index === activeImageIndex
                              ?  "rounded-md bg-[#dbd9d9] items-center justify-center flex p-1 "
                              : "  rounded-md p-1 items-center justify-center bg-[#f6f5f4] hover:bg-[#eae7e7] "
                          }  `}
                        >
                          <div className=" text-sm items-center justify-center flex">
                            {image.title}

                            </div>
                     
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>

              <>
                {index !== 0 && (
                  <div className="mt-4">
                    <Image
                      src={tab?.image || ""}
                      alt={`${tab.header} Image`}
                      width={500}
                      height={500}
                      className="mt-10  rounded-xl"
                    />
                  </div>
                )}
              </>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl xl:py-10 pt-6 px-8 md:px-8  md:w-2/3 xl:w-1/2 text-center ",
            font.className
          )}
        >
          &quot;Bird adapts to your needs. It&apos;s as minimal or as powerful
          as you need it to be.&quot;
        </div>


          <div className="items-center flex justify-center flex-col">
            <Image
              src="/logos/logoipsum-327.svg"
              alt="Canva logo"
              width={1000}
              height={1000}
              className="pt-2 xl:pt-0  w-10 xl:w-14 "
            />
       
          <div className="m text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
          </div>
        </div>
     
    </>
  );
};

export default FourthSection;
