"use client";

import * as React from "react";
import { CameraSetDialogContent } from "./CameraSetModal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CameraSetPage = () => {
  const router = useRouter();
  return (
    <div>
      <CameraSetDialogContent className="w-full h-full z-50">
        <div className="h-full flex flex-col justify-center">
          <div className="h-full flex flex-col justify-center pt-10 gap-8">
            <div className="flex flex-col gap-3">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/breakfast.jpeg"
                  fill
                  alt="Image"
                  className="object-cover rounded-lg"
                />
              </AspectRatio>
              <div className="flex gap-3 items-center text-muted-foreground">
                <p className="text-xs py-1.5 px-4 bg-primary/80 text-primary-foreground font-semibold tracking-widest rounded-sm">
                  朝ご飯
                </p>
                <p className="text-xs py-1.5 px-4  text-muted-foreground font-semibold border tracking-widest rounded-sm">
                  昼ご飯
                </p>
                <p className="text-xs py-1.5 px-4  text-muted-foreground font-semibold border tracking-widest rounded-sm">
                  筋トレ
                </p>
              </div>
              <Input placeholder="コメントを入力" className="h-20" />
            </div>
            <Button
              onClick={() => {
                router.back();
              }}
              className="w-full"
              variant="natural"
            >
              作成する
            </Button>
          </div>
        </div>
      </CameraSetDialogContent>
    </div>
  );
};

export default CameraSetPage;
