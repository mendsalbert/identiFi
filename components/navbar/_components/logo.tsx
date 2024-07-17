import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <span className="ml-3 mr-2 text-xl font-bold">
          Identi<span className="text-sky-600">Fi </span>
        </span>
        {/* <Image
          src="/logos/bird-logo.png"
          alt="logo"
          width={100}
          height={100}
          className="
                    w-9 ml-3
                  "
        /> */}
      </Link>
    </>
  );
};

export default Logo;
