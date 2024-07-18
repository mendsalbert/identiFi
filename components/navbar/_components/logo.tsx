import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <span className="ml-3 mr-2 text-xl font-bold">
          Identi<span className="text-sky-600">Fi </span>
        </span>
      </Link>
    </>
  );
};

export default Logo;
