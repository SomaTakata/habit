"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronDown, RefreshCw, Zap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import CameraSetButton from "./CameraButton";

const CameraPage = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col gap-10 p-5 pb-24 h-full">
      <ChevronDown
        onClick={() => router.back()}
        className="absolute left-5 top-5 h-7 w-7 z-20"
      />
      <div className="w-full absolute top-5 right-0 left-0 text-2xl font-bold justify-center text-center">
        HabitLink
      </div>
      <div className="h-full flex flex-col justify-center">
        <div className="h-full flex flex-col justify-center pt-10 gap-4">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/breakfast.jpeg"
              fill
              alt="Image"
              className="object-cover rounded-lg"
            />
          </AspectRatio>
          <div className="flex px-2 justify-between items-center text-muted-foreground">
            <div className="p-2 border rounded-full">
              <Zap className=" h-6 w-6" />
            </div>
            <div className="p-2 border rounded-full flex text-center">
              <p className="text-base w-6 font-bold">1x</p>
            </div>
            <div className="p-2  border rounded-full">
              <RefreshCw className=" h-6 w-6" />
            </div>
          </div>
        </div>
        <CameraSetButton />
      </div>
    </div>
  );
};

export default CameraPage;
