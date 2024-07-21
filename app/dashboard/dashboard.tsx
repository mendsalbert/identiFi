"use client";
import { useState, useRef } from "react";

import { motion } from "framer-motion";
import Profile from "./components/profile";
import EditProfile from "./components/edit-profile";

export default function ContactForm() {
  const tabs = [
    {
      name: "Profile",
      component: <Profile />,
    },
    {
      name: "Edit Profile",
      component: <EditProfile />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex flex-row justify-center items-center md:grid-cols-6 md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  ">
        {tabs.map((tab: any) => (
          <motion.div
            key={tab.name}
            className={`
              flex
              items-center justify-center 
              p-1
              md:p-1
                cursor-pointer
                md:px-4
                ${
                  activeTab.name === tab.name
                    ? "rounded-md md:rounded-xl bg-[#f6f5f4]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 "
                    : "md:bg-[#f6f5f4]   rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                } `}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col   items-center md:justify-center mx-auto">
              <div className="font-medium text-sm  xl:text-lg mt-1">
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        className="md:flex relative  justify-center pt-20 pb-20 px-16"
      >
        {activeTab && <>{activeTab.component}</>}
      </div>
    </div>
  );
}
