import React from "react";
import { LuUser2 } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        alt="profile Image"
        src={profileImage}
        width={24}
        height={24}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
      <LuUser2 />
    </div>
  );
}
