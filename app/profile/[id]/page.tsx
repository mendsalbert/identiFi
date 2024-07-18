"use client";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "./user-profile";
import Footer from "@/components/footer";

const Profile = ({ params }: { params: { id: any } }) => {
  return (
    <div className="">
      <Navbar />
      <HeroSection param={params.id} />
      <Footer />
    </div>
  );
};

export default Profile;
