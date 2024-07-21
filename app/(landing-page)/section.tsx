import {
  PiArrowRight,
  PiCheckCircleFill,
  PiClipboardLight,
  PiHouseFill,
  PiShareLight,
  PiUserCheck,
} from "react-icons/pi";
import Image from "next/image";

const items = [
  {
    icon: <PiHouseFill className="text-2xl text-red-500" />,
    name: "Social Profiles",
    button: (
      <div
        className="text-sky-500 flex items-center 
       hover:cursor-pointer pt-6"
      ></div>
    ),
    image: "/images/company-wiki.png",
  },
  {
    icon: <PiUserCheck className="text-2xl text-sky-600" />,
    name: " Secure Digital Identity",
    button: (
      <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
        Create and manage your unique decentralized identifier (DID) on the
        blockchain.
      </div>
    ),
  },
  {
    icon: <PiCheckCircleFill className="text-2xl text-orange-500" />,
    name: "Identity Verification ",
    button: (
      <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
        Submit identity ID and get verified by trusted third parties.
      </div>
    ),
  },
  {
    icon: <PiClipboardLight className="text-2xl text-green-500" />,
    name: " Manage Your Profile",
    button: (
      <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
        Update personal details and manage your credentials easily.
      </div>
    ),
  },
  {
    icon: <PiShareLight className="text-2xl text-red-500" />,
    name: "Share Your Identity",
    button: (
      <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
        Share your verified digital identity securely with others and on all
        social media accounts.
      </div>
    ),
  },
];

const Section = () => {
  return (
    <>
      <div className="flex flex-col pt-32  items-center justify-center">
        <div
          className="text-3xl xl:text-5xl font-medium justify-center
         items-center flex"
        >
          Endless ways to use it
        </div>
        <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
          Learn How <PiArrowRight className="ml-3 text-sm " />
        </div>
      </div>
      <div
        className="grid xl:grid-cols-4 pb-32 md:grid-cols-2 
      md:row-span-1  gap-4  xl:gap-6 mt-8 px-8 
      md:px-16 xl:px-0 xl:w-3/4  2xl:w-[55%] mx-auto md:w-full"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? " xl:col-span-2 xl:row-span-3  md:col-span-2  flex-col md:flex-row xl:flex-col"
                : ""
            } bg-[#f6f5f4] p-6 rounded-xl  flex ${
              index === 0 ? "justify-between" : ""
            }`}
          >
            <div className="flex flex-col ">
              {item.icon}
              <div className="text-lg font-medium mt-2">{item.name}</div>
              {item.button}
            </div>
            {item.image && (
              <div
                className={` ${
                  index !== 0 ? "justify-between" : "flex-col justify-end"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} Image`}
                  width={1000}
                  height={1000}
                  className="
                  mt-10
             w-96
             rounded-xl

                  
                  "
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
