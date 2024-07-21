"use client";
import Navbar from "@/components/navbar/navbar";
import ProfileSection from "./user-profile";
import Footer from "@/components/footer";

const Profile = ({ params }: { params: { id: any } }) => {
  return (
    <div className="">
      <Navbar />
      <ProfileSection param={params.id} />
      <Footer />
    </div>
  );
};

export default Profile;
