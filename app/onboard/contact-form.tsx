"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Computer, ScreenShare, Share, Smile } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CustomImageUploader from "@/components/ui/custom-image-uploader";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight } from "react-icons/pi";
import Select from "react-select";
import makeAnimated, { Placeholder } from "react-select/animated";
import {
  getUserByAddress,
  getUserByUsername,
  createUser,
  getUsernameByAddress,
  editUser,
} from "@/utils/queries";
import { userInfo } from "os";
import { useWallets } from "@privy-io/react-auth";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

const animatedComponents = makeAnimated();

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
  email: z.string().email(),
  home_address: z.string(),
  date_of_birth: z.string().date(),
  education: z.string(),
  work_history: z.string(),
  phone_number: z.string(),
  job_title: z.string(),
  imageUrl: z.string(),
  x: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?twitter\.com\/[A-Za-z0-9_]{1,15}$/,
      "Invalid Twitter URL"
    )
    .optional(),
  instagram: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9_.]+$/,
      "Invalid Instagram URL"
    )
    .optional(),
  youtube: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?youtube\.com\/(channel\/|user\/)?[A-Za-z0-9_-]+$/,
      "Invalid YouTube URL"
    )
    .optional(),
  tiktok: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?tiktok\.com\/@[A-Za-z0-9_.]+$/,
      "Invalid TikTok URL"
    )
    .optional(),
  linkedin: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+$/,
      "Invalid LinkedIn URL"
    )
    .optional(),
  info: z.string(),
  skills: z.any(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function CreateProile() {
  const [countryCode, setCountryCode] = useState("");
  const { ready, wallets } = useWallets();

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountryCode(response.data.country_code);
        handleChange("country_code", response.data.country_code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };

    fetchCountryCode();
  }, []);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormValues>({
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

  useEffect(() => {
    const getUserInfo = async () => {
      let userInfo = (await getUserByAddress(wallets[0]?.address)) as any;
      let username = (await getUsernameByAddress(wallets[0]?.address)) as any;
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
      console.log(userInfo);
      console.log(username);
    };
    getUserInfo();
  }, []);

  const [validUrls, setValidUrls] = useState({
    x: false,
    instagram: false,
    youtube: false,
    tiktok: false,
    linkedin: false,
  });

  const [errors, setErrors] = useState({}) as any;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: formData,
  });

  async function onSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      const basicInfo = {
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        homeAddress: formData.home_address,
        dateOfBirth: formData.date_of_birth,
        phoneNumber: formData.phone_number,
      };

      const professionalInfo = {
        education: formData.education,
        workHistory: formData.work_history,
        jobTitle: formData.job_title,
        info: formData.info,
        skills: formData.skills,
        imageURL: formData.imageUrl,
      };

      const socialLinks = {
        x: formData.x || "",
        instagram: formData.instagram || "",
        tiktok: formData.tiktok || "",
        youtube: formData.youtube || "",
        linkedin: formData.linkedin || "",
      };

      const visibility = {
        education: true,
        workHistory: true,
        phoneNumber: true,
        homeAddress: true,
        dateOfBirth: true,
      };

      if (
        !formData.username ||
        !basicInfo.firstName ||
        !basicInfo.lastName ||
        !basicInfo.email
      ) {
        throw new Error("Required fields are missing.");
      }

      const receipt = await createUser(
        formData.username,
        basicInfo,
        professionalInfo,
        socialLinks,
        visibility
      );
      console.log("User created:", receipt);
      toast({
        title: "",
        description: "User created successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  const validateUrl = (url: any, pattern: any) => {
    if (!url) return false;
    const regex = new RegExp(pattern);
    return regex.test(url);
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate input fields in real-time
    let error = "";
    if (name === "email" && value && !/.+@.+\..+/.test(value)) {
      error = "Invalid email address";
    } else if (
      ["x", "instagram", "youtube", "tiktok", "linkedin"].includes(name)
    ) {
      const isValid = validateUrl(
        value,
        {
          x: "^https?:\\/\\/(www\\.)?twitter\\.com\\/[A-Za-z0-9_]{1,15}$",
          instagram: "^https?:\\/\\/(www\\.)?instagram\\.com\\/[A-Za-z0-9_.]+$",
          youtube:
            "^https?:\\/\\/(www\\.)?youtube\\.com\\/(channel\\/|user\\/)?[A-Za-z0-9_-]+$",
          tiktok: "^https?:\\/\\/(www\\.)?tiktok\\.com\\/@[A-Za-z0-9_.]+$",
          linkedin:
            "^https?:\\/\\/(www\\.)?linkedin\\.com\\/in\\/[A-Za-z0-9_-]+$",
        }[name]
      );
      setValidUrls((prev) => ({ ...prev, [name]: isValid }));
      if (!isValid) {
        error = `Invalid ${name.charAt(0).toUpperCase() + name.slice(1)} URL`;
      }
    }
    console.log(name, value);

    setErrors((prevErrors: any) => ({ ...prevErrors, [name]: error }));
  };

  const handleSkillChange = (selected: any) => {
    if (selected.length <= 3) {
      const selectedValues = selected.map((option: any) => option.value);
      setSelectedOptions(selected);
      handleChange("skills", selectedValues);
    }
  };

  const options = [
    { value: "backend-development", label: "Backend Development" },
    { value: "frontend-development", label: "Frontend Development" },
    { value: "full-stack-development", label: "Full Stack Development" },
    { value: "devops", label: "DevOps" },
    { value: "data-science", label: "Data Science" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "artificial-intelligence", label: "Artificial Intelligence" },
    { value: "blockchain-development", label: "Blockchain Development" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "cloud-computing", label: "Cloud Computing" },
    { value: "mobile-app-development", label: "Mobile App Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "graphic-design", label: "Graphic Design" },
    { value: "product-management", label: "Product Management" },
    { value: "project-management", label: "Project Management" },
    { value: "software-testing-qa", label: "Software Testing/QA" },
    { value: "business-analysis", label: "Business Analysis" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "content-creation", label: "Content Creation" },
    { value: "seo", label: "SEO (Search Engine Optimization)" },
    { value: "social-media-management", label: "Social Media Management" },
    { value: "it-support", label: "IT Support" },
    { value: "network-administration", label: "Network Administration" },
    { value: "database-administration", label: "Database Administration" },
    { value: "data-engineering", label: "Data Engineering" },
    { value: "web-development", label: "Web Development" },
    { value: "game-development", label: "Game Development" },
    { value: "ar-vr-development", label: "AR/VR Development" },
    { value: "e-commerce-development", label: "E-commerce Development" },
    { value: "technical-writing", label: "Technical Writing" },
    {
      value: "customer-relationship-management",
      label: "Customer Relationship Management (CRM)",
    },
    { value: "sales", label: "Sales" },
    { value: "financial-analysis", label: "Financial Analysis" },
    { value: "human-resources", label: "Human Resources" },
    { value: "legal-compliance", label: "Legal Compliance" },
    { value: "supply-chain-management", label: "Supply Chain Management" },
    { value: "operations-management", label: "Operations Management" },
    { value: "electrical-engineering", label: "Electrical Engineering" },
    { value: "mechanical-engineering", label: "Mechanical Engineering" },
    { value: "civil-engineering", label: "Civil Engineering" },
  ];

  const socialMediaPlatforms = [
    { name: "x", icon: <IconBrandX width={24} height={24} color="white" /> },
    {
      name: "instagram",
      icon: <IconBrandInstagram width={24} height={24} color="white" />,
    },
    {
      name: "youtube",
      icon: <IconBrandYoutube width={24} height={24} color="white" />,
    },
    {
      name: "tiktok",
      icon: <IconBrandTiktok width={24} height={24} color="white" />,
    },
    {
      name: "linkedin",
      icon: <IconBrandLinkedin width={24} height={24} color="white" />,
    },
  ];

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#000000" : "#d1d5db", // TailwindCSS gray-300
      boxShadow: state.isFocused ? "0 0 0 1px #d1d5db" : "none", // Remove default shadow
      "&:hover": {
        borderColor: "#d1d5db", // TailwindCSS gray-300
      },
      borderRadius: "0.375rem", // TailwindCSS rounded-md
      paddingTop: "0.2rem", // TailwindCSS py-2 (top padding)
      paddingBottom: "0.2rem", // TailwindCSS py-2 (bottom padding)
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#e5e7eb", // TailwindCSS gray-200
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#374151", // TailwindCSS gray-700
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "#6b7280", // TailwindCSS gray-500
      "&:hover": {
        color: "#4b5563", // TailwindCSS gray-700
      },
    }),
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [imageUrls, setImageUrls] = useState("/images/avatar.jpeg");

  const handleImagesChange = async (files: any) => {
    const file = files[0]; // Only handling one image
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("pinataMetadata", JSON.stringify({ name: file.name }));
      form.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));

      const options = {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMWJjNzRiNy00YWUzLTQ0ZmUtYjU1NS0wNGVkOTRlMTY1NzAiLCJlbWFpbCI6Im1lbmRzYWxiZXJ0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiOWI4NzA2ZTQ4MDMwYzE1MzRhZCIsInNjb3BlZEtleVNlY3JldCI6ImM5N2M4ODgyZDFiZDg1MDY5ZmU3M2Q0YmRkODhmMWZiMzFiYzU0YTQ2NjJkMGQ1Njk5Mjg4NzAxYjUxZThkMjAiLCJpYXQiOjE3MTYwNzQ3Mzd9.uL0vggNCb0Y0Zz42yQiZ4fBwG3kDAlGotZ2TgsMvyLc",
        },
        body: form,
      };

      const response = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        options
      );
      console.log(formData);

      const responseData = await response.json();
      if (responseData.error) {
        throw new Error(responseData.error);
      }
      const fileUrl = `https://gateway.pinata.cloud/ipfs/${responseData.IpfsHash}`;
      console.log(fileUrl);

      setFormData((prev) => ({ ...prev, imageUrl: fileUrl }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="flex flex-col  md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0 md:space-x-10 pt-20 pb-20 px-4 md:px-16"
    >
      <div className="">
        <div className="md:text-4xl text-xl font-medium w-3/3 pb-3">
          Creating a DID is a breeze with{" "}
          <span className="text-sky-500">identiFi</span>
        </div>
        <Toaster />
        <div className="flex justify-center md:justify-start">
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
                    <p className="text-sm">
                      {formData.email || "identiFi@gmail.com"}
                    </p>
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
                <div className="grid grid-cols-2 gap-2 w-full ">
                  {formData.skills.map((skill: any) => (
                    <div className="flex flex-row items-center bg-gray-100 w-max space-x-2 px-3 py-2 rounded-lg">
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
                      <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                        <IconBrandYoutube
                          width={24}
                          height={24}
                          color="white"
                        />
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
                        <IconBrandLinkedin
                          width={24}
                          height={24}
                          color="white"
                        />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Form {...form}>
        <div className="w-full md:w-2/3">
          {!submitted ? (
            <form onSubmit={onSubmit} className="space-y-4 w-full">
              <div className="md:flex items-center gap-6 ">
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="text-sm ">First name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Satoshi"
                      onChange={(e) =>
                        handleChange("first_name", e.target.value)
                      }
                      value={formData.first_name}
                    />
                  </FormControl>
                </FormItem>

                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="w-60 text-sm ">Last name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="nakamoto"
                      onChange={(e) =>
                        handleChange("last_name", e.target.value)
                      }
                      value={formData.last_name}
                    />
                  </FormControl>
                </FormItem>
              </div>

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className="w-60 text-sm">username *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="satoshinakamoto"
                    onChange={(e) => handleChange("username", e.target.value)}
                    value={formData.username}
                  />
                </FormControl>
              </FormItem>

              <div className="md:flex items-center gap-6 ">
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="text-sm ">Home Address *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="18670 Coastal Highway"
                      onChange={(e) =>
                        handleChange("home_address", e.target.value)
                      }
                      value={formData.home_address}
                    />
                  </FormControl>
                </FormItem>

                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="w-60 text-sm ">
                    Date of Birth*
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      onChange={(e) =>
                        handleChange("date_of_birth", e.target.value)
                      }
                      value={formData.date_of_birth}
                    />
                  </FormControl>
                </FormItem>
              </div>

              <div className="md:flex items-center gap-6 ">
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="text-sm ">Education *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Havard"
                      onChange={(e) =>
                        handleChange("education", e.target.value)
                      }
                      value={formData.education}
                    />
                  </FormControl>
                </FormItem>

                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="w-60 text-sm ">Work History*</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Apple,google,amazon"
                      onChange={(e) =>
                        handleChange("work_history", e.target.value)
                      }
                      value={formData.work_history}
                    />
                  </FormControl>
                </FormItem>
              </div>

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className=" text-sm   ">Email *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="sotashinakamoto@gmail.com"
                    onChange={(e) => handleChange("email", e.target.value)}
                    value={formData.email}
                  />
                </FormControl>
              </FormItem>

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className=" text-sm   ">Phone number *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+123456789-0"
                    onChange={(e) =>
                      handleChange("phone_number", e.target.value)
                    }
                    value={formData.phone_number}
                  />
                </FormControl>
              </FormItem>

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className=" text-sm   ">Job Title*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Designer"
                    onChange={(e) => handleChange("job_title", e.target.value)}
                    value={formData.job_title}
                  />
                </FormControl>
              </FormItem>

              <FormItem className="items-center justify-center  mb-4  w-full">
                <FormLabel className=" text-sm   ">Select Skills *</FormLabel>
                <FormControl>
                  <Select
                    components={animatedComponents}
                    isMulti
                    value={selectedOptions}
                    onChange={handleSkillChange}
                    options={options}
                    className="text-md"
                    styles={customStyles}
                    classNamePrefix="react-select"
                  />
                </FormControl>
              </FormItem>

              <CustomImageUploader onImagesChange={handleImagesChange} />

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className=" text-sm   ">
                  {errors?.x && (
                    <p className="text-red-500 text-xs mt-1">{errors?.x}</p>
                  )}
                  X (Formerly Twitter)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://x.com/johndoe"
                    onChange={(e) => handleChange("x", e.target.value)}
                    value={formData.x}
                  />
                </FormControl>
              </FormItem>

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className=" text-sm   ">
                  {errors?.instagram && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors?.instagram}
                    </p>
                  )}
                  Instagram
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.instagram.com/johndoe"
                    onChange={(e) => handleChange("instagram", e.target.value)}
                    value={formData.instagram}
                  />
                </FormControl>
              </FormItem>

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className=" text-sm   ">
                  {errors?.tiktok && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors?.tiktok}
                    </p>
                  )}
                  Tiktok
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.tiktok.com/@johndoe"
                    onChange={(e) => handleChange("tiktok", e.target.value)}
                    value={formData.tiktok}
                  />
                </FormControl>
              </FormItem>

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className=" text-sm   ">
                  {errors?.youtube && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors?.youtube}
                    </p>
                  )}
                  Youtube
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.youtube.com/user/johndoe"
                    onChange={(e) => handleChange("youtube", e.target.value)}
                    value={formData.youtube}
                  />
                </FormControl>
              </FormItem>

              <FormItem className="items-center justify-center  w-full">
                <FormLabel className=" text-sm   ">
                  {errors?.linkedin && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors?.linkedin}
                    </p>
                  )}
                  LinkedIn
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.linkedin.com/in/johndoe"
                    onChange={(e) => handleChange("linkedin", e.target.value)}
                    value={formData.linkedin}
                  />
                </FormControl>
              </FormItem>

              <FormItem className="items-center justify-center w-full">
                <FormLabel className="w-60 text-sm   ">About you?</FormLabel>
                <FormControl>
                  <Textarea
                    style={{ height: "100px" }}
                    onChange={(e) => handleChange("info", e.target.value)}
                    value={formData.info}
                  />
                </FormControl>
              </FormItem>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="
                            text-sm
                            font-light
                        
                            "
                  disabled={loading}
                >
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div
                className="
        text-xl 
        md:text-2xl 
        flex 
        items-center
        justify-center
        flex-col
        

 
        px-8

        "
              >
                <div className="w-80">
                  <Image
                    src="/assets/MeditatingDoodle.svg"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="mx-auto"
                  />

                  <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
                    We&apos;ve received your inquiry and will be contacting you
                    via email shortly.
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Form>
    </div>
  );
}
