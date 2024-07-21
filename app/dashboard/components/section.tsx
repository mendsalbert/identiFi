"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useToast } from "@/components/ui/use-toast";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";
import {
  IconBriefcase2,
  IconCake,
  IconClock,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  IconBriefcase,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import {
  getUserByAddress,
  getUserByUsername,
  getUsernameByAddress,
} from "@/utils/queries";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { useWallets } from "@privy-io/react-auth";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "AI",
    feature: "Now with Q&A",
    description: "Ask literally anything. identiBot Will answer.",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Create ID",
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
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
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
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
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

const Section = () => {
  const [formData, setFormData] = useState<any>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    home_address: "",
    date_of_birth: "",
    education: "",
    work_history: "",
    phone_number: "",
    job_title: "",
    x: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    linkedin: "",
    info: "",
    imageUrl: "",
    skills: ["UI/UX", "DevOps", "FrontEnd Dev"],
  });
  const { toast } = useToast();
  const [countryCode, setCountryCode] = useState("");
  const { ready, wallets } = useWallets();

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountryCode(response.data.country_code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };

    fetchCountryCode();
  }, []);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        let userInfo = (await getUserByAddress(wallets[0].address)) as any;
        let username = (await getUsernameByAddress(wallets[0].address)) as any;
        setFormData({
          first_name: userInfo.basicInfo.firstName,
          last_name: userInfo.basicInfo.lastName,
          username: username,
          email: userInfo.basicInfo.email,
          home_address: userInfo.basicInfo.homeAddress,
          date_of_birth: userInfo.basicInfo.dateOfBirth,
          education: userInfo.professionalInfo.education,
          work_history: userInfo.professionalInfo.workHistory,
          phone_number: userInfo.basicInfo.phoneNumber,
          job_title: userInfo.professionalInfo.jobTitle,
          x: userInfo.socialLinks.x,
          instagram: userInfo.socialLinks.instagram,
          tiktok: userInfo.socialLinks.tiktok,
          youtube: userInfo.socialLinks.youtube,
          linkedin: userInfo.socialLinks.linkedin,
          info: userInfo.professionalInfo.info,
          skills: userInfo.professionalInfo.skills,
          imageUrl: userInfo.professionalInfo.imageURL,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "User Doesn't exist",
        });
        console.error("Error fetching country code:", error);
      }
    };
    getUserInfo();
  }, []);

  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center items-center flex flex-col w-full">
      <div className="flex flex-col items-center">
        <div className="id-card-tag"></div>
        <div className="id-card-tag-strip"></div>
        <div className="id-card-hook"></div>
      </div>
      <Toaster />
      <div className="md:items-center items-center justify-center flex flex-col w-11/12 md:w-7/12 ">
        <div className="flex flex-row items-start ">
          <div className="border-2 rounded-xl  shadow-lg mb-4 py-3 overflow-hidden w-full bg-gradient-to-tl from-slate-50 to-slate-100">
            <div className="flex flex-col items-center justify-center pt-4 mx-3">
              <div className="text-center flex flex-col items-center justify-center">
                <img
                  className="w-28 h-28 shadow-md object-cover object-center p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={formData.imageUrl || "/images/avatar.jpeg"}
                  alt="Bordered avatar"
                />
                <p className="font-bold text-lg text-gray-700 py-2">
                  @{`${formData.username}` || `UserNotFound`}
                </p>
                <p className="text-sm text-gray-700 py-1">
                  {formData.info || "We making digital Identity easier..."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 w-full">
                <div className="flex flex-row items-center space-x-2 bg-white px-3 py-2 rounded-lg">
                  <IconBriefcase width={17} height={17} />
                  <p className="text-sm">{formData.job_title || "Company"} </p>
                </div>
                <div className="flex flex-row items-center space-x-2 bg-white px-3 py-2 rounded-lg">
                  <IconMapPin width={17} height={17} />
                  <p className="text-sm">{countryCode}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 w-full">
                <div className="flex flex-row items-center space-x-2 bg-white px-3 py-2 rounded-lg">
                  <IconMail width={17} height={17} />
                  <p className="text-sm">
                    {formData.email || "identiFi@gmail.com"}
                  </p>{" "}
                </div>
                <div className="flex flex-row items-center space-x-2 bg-white px-3 py-2 rounded-lg">
                  <IconPhone width={17} height={17} />
                  <p className="text-sm">
                    {" "}
                    {formData.phone_number || "+00 123 456 789"}{" "}
                  </p>{" "}
                </div>
              </div>
              <div className="flex flex-col w-full mt-2 ">
                <div className=" bg-white rounded-lg p-3 space-y-2">
                  <div className="flex flex-row items-center space-x-2   rounded-lg">
                    <IconUser width={18} height={18} />
                    <p className="text-sm">General Information</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    About me
                  </p>
                  <p className="text-sm ">
                    {formData.info || "We making digital Identity easier..."}
                  </p>
                  <div className="grid grid-cols-2 pt-3 gap-2">
                    <div className="py-2">
                      <div className="flex flex-row items-center space-x-1   rounded-lg">
                        <IconSchool width={17} height={17} />
                        <p className="text-sm">Education</p>
                      </div>
                      <p className="text-xs font-semibold ">
                        {formData.education ||
                          "Thomas Jeff High School, Stanford University"}
                      </p>
                    </div>
                    <div className="py-2">
                      <div className="flex flex-row items-center space-x-1   rounded-lg">
                        <IconBriefcase2 width={17} height={17} />
                        <p className="text-sm">Work History</p>
                      </div>
                      <p className="text-xs font-semibold ">
                        {formData.work_history || "Twitch, Google, Apple"}
                      </p>
                    </div>
                    <div className="py-2">
                      <div className="flex flex-row items-center space-x-1   rounded-lg">
                        <IconClock width={17} height={17} />
                        <p className="text-sm">Join Date</p>
                      </div>
                      <p className="text-xs font-semibold ">
                        {formData.dateOfBirth || " 2024"}
                      </p>
                    </div>

                    <div className="py-2">
                      <div className="flex flex-row items-center space-x-1   rounded-lg">
                        <IconCake width={17} height={17} />
                        <p className="text-sm">Birthday</p>
                      </div>
                      <p className="text-xs font-semibold ">
                        {formData.date_of_birth || " 15-08-1990"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mt-2 ">
                <div className=" pb-2 space-y-2">
                  <p className="text-md font-medium">Skills</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full ">
                {formData?.skills?.map((skill: any) => (
                  <div className="flex flex-row items-center bg-white w-max  space-x-2  px-3 py-2 rounded-lg">
                    <p className="text-xs">{skill}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col w-full mt-2 ">
                <div className=" pb-1 space-y-2">
                  <p className="text-md font-medium">Socials</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 pt-1 w-full">
                {formData.x && (
                  <Link href={formData.x}>
                    <div className="flex flex-row items-center justify-center bg-black px-3 py-2 rounded-lg cursor-pointer">
                      <IconBrandX width={24} height={24} color="white" />
                    </div>
                  </Link>
                )}
                {formData.instagram && (
                  <Link href={formData.instagram}>
                    <div className="flex flex-row items-center justify-center bg-[#5b51d8] px-3 py-2 rounded-lg cursor-pointer">
                      <IconBrandInstagram
                        width={24}
                        height={24}
                        color="white"
                      />
                    </div>
                  </Link>
                )}
                {formData.youtube && (
                  <Link href={formData.youtube}>
                    <div className="flex flex-row items-center justify-center bg-[#ff0000] px-3 py-2 rounded-lg cursor-pointer">
                      <IconBrandYoutube width={24} height={24} color="white" />
                    </div>
                  </Link>
                )}
                {formData.tiktok && (
                  <Link href={formData.tiktok}>
                    <div className="flex flex-row items-center justify-center bg-[#69c9d0] px-3 py-2 rounded-lg cursor-pointer">
                      <IconBrandTiktok width={24} height={24} color="white" />
                    </div>
                  </Link>
                )}
                {formData.linkedin && (
                  <Link href={formData.linkedin}>
                    <div className="flex flex-row items-center justify-center bg-[#2867b2] px-3 py-2 rounded-lg cursor-pointer">
                      <IconBrandLinkedin width={24} height={24} color="white" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Section;
