// components/UserProfileDisplay.tsx
import React from "react";
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
import Link from "next/link";

interface UserProfileDisplayProps {
  formData: any;
  countryCode: string;
}

const UserProfileDisplay: React.FC<UserProfileDisplayProps> = ({
  formData,
  countryCode,
}) => (
  <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center pt-4 mx-3">
        <div className="text-center flex flex-col items-center justify-center">
          <img
            className="w-20 h-20 object-cover object-center p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={formData.imageUrl || "/images/avatar.jpeg"}
            alt="Bordered avatar"
          />
          <p className="font-medium text-gray-700 py-2">
            @{`${formData.username}` || `identiFiDID`}
          </p>
          <p className="text-sm text-gray-700 py-1">
            {formData.info || "We making digital Identity easier..."}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 py-2 w-full">
          <div className="flex flex-row items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
            <IconBriefcase width={17} height={17} />
            <p className="text-sm">{formData.job_title || "Company"}</p>
          </div>
          <div className="flex flex-row items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
            <IconMapPin width={17} height={17} />
            <p className="text-sm">{countryCode}</p>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex flex-row items-center bg-gray-100 space-x-2 px-3 py-2 rounded-lg">
            <IconMail width={17} height={17} />
            <p className="text-sm">{formData.email || "identiFi@gmail.com"}</p>
          </div>
          <div className="flex flex-row items-center bg-gray-100 mt-2 space-x-2 px-3 py-2 rounded-lg">
            <IconPhone width={17} height={17} />
            <p className="text-sm">
              {formData.phone_number || "+00 123 456 789"}
            </p>
          </div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            Skills
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          {formData.skills.map((skill: string, index: number) => (
            <div
              key={index}
              className="flex flex-row items-center bg-gray-100 w-max space-x-2 px-3 py-2 rounded-lg"
            >
              <p className="text-xs">{skill}</p>
            </div>
          ))}
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            Socials
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-2 w-full">
          {formData.x && (
            <Link href={formData.x}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandX width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.instagram && (
            <Link href={formData.instagram}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandInstagram width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.youtube && (
            <Link href={formData.youtube}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandYoutube width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.tiktok && (
            <Link href={formData.tiktok}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandTiktok width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.linkedin && (
            <Link href={formData.linkedin}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandLinkedin width={24} height={24} color="white" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default UserProfileDisplay;
