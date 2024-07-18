"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import { useState, useEffect } from "react";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IconZoomCheck } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Section = () => {
  const ref = useRef(null);
  const router = useRouter();

  const [searchVal, setSearchVal] = useState("");
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const onSumbitSearch = () => {
    if (searchVal.length <= 0) {
      alert(`Search value can't be empty`);
    } else {
      router.push(`/profile/${searchVal}`);
    }
  };

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
          text-4xl
            xl:text-6xl     
            flex
            flex-col
            items-center
            space-x-2
            justify-center
            xl:font-medium
            xl:pt-14
            text-center 
            pt-6
            "
      >
        <span>Verify any Identity</span>
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
        <FormItem className="items-center justify-center  w-full">
          <FormControl>
            <Input
              className="border-2 border-black p-5"
              placeholder="Enter identiFiDID eg: satoshinakamoto"
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
            />
          </FormControl>
        </FormItem>
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        <Button
          className="py-1 "
          onClick={() => {
            onSumbitSearch();
          }}
        >
          <div className="flex items-center justify-center">
            <div className="text-lg">Verify</div>
            <div>
              <IconZoomCheck className="ml-2" height={20} width={20} />
            </div>
          </div>
        </Button>
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
    </div>
  );
};

export default Section;
