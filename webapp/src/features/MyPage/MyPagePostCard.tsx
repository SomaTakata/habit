"use client";

import Image from "next/image";
import React from "react";

interface PostCardProps {
  imageSrc: string;
  label: string;
  time: string;
}

const MyPagePostCard: React.FC<PostCardProps> = ({ imageSrc, label, time }) => {
  return (
    <div className="flex flex-col gap-2 p-2 bg-background border shadow-lg rounded-lg relative">
      <p className="absolute text-primary-foreground bg-orange-400 top-3 right-3 rounded-sm z-50 px-3 py-1 text-xs font-bold tracking-wider">
        {label}
      </p>
      <div className="w-56 relative aspect-square">
        <Image
          src={imageSrc}
          fill
          alt="Image"
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full flex justify-end">
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
};

export default MyPagePostCard;
