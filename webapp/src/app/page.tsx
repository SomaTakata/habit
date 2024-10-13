import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { MessageSquareText, Heart } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col pb-[78px]">
      <div className="w-full bg-background py-5 flex flex-col gap-2.5">
        <div className="flex items-end justify-between px-3">
          <div className="flex gap-2 items-center">
            <Avatar className="w-[30px] h-[30px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2">
              <p className="text-card-foreground font-semibold text-sm">
                Soma Takata
              </p>
              <p className="text-muted-foreground text-xs">09:27</p>
            </div>
          </div>
          <p className="text-xs py-1.5 px-4 bg-primary/80 text-primary-foreground font-semibold tracking-widest rounded-sm">
            朝ご飯
          </p>
        </div>
        <div className="w-full relative">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/breakfast.jpeg"
              fill
              alt="Image"
              className="object-cover"
            />
          </AspectRatio>
          <div className="absolute flex gap-2 bottom-3 right-3">
            <button className="bg-secondary text-secondary-foreground items-center justify-center py-1 flex gap-1 px-3 rounded-xl h-fit">
              <MessageSquareText size={12} />
              <p className="text-xs">2</p>
            </button>
            <button className="text-xs bg-secondary text-secondary-foreground items-center justify-center py-1 flex gap-1 px-3 rounded-xl h-fit">
              <Heart size={12} />
              <p className="text-xs">11</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col px-3 py-1 gap-1.5">
          <p className="text-card-foreground text-sm  tracking-wider">
            今日朝ご飯は、鮭と卵焼きを作りました。味噌汁は具をいっぱい入れました。
          </p>
          <div className="flex gap-0.5 items-end text-muted-foreground">
            <MessageSquareText size={15} />
            <p className="text-xs tracking-wider">コメントを追加</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-background py-5 flex flex-col gap-2.5">
        <div className="flex items-end justify-between px-3">
          <div className="flex gap-2 items-center">
            <Avatar className="w-[30px] h-[30px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2">
              <p className="text-card-foreground font-semibold text-sm">
                Soma Takata
              </p>
              <p className="text-muted-foreground text-xs">09:27</p>
            </div>
          </div>
          <p className="text-xs py-1.5 px-4 bg-primary/80 text-primary-foreground font-semibold tracking-widest rounded-sm">
            朝ご飯
          </p>
        </div>
        <div className="w-full relative">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/breakfast.jpeg"
              fill
              alt="Image"
              className="object-cover"
            />
          </AspectRatio>
          <div className="absolute flex gap-2 bottom-3 right-3">
            <button className="bg-secondary text-secondary-foreground items-center justify-center py-1 flex gap-1 px-3 rounded-xl h-fit">
              <MessageSquareText size={12} />
              <p className="text-xs">2</p>
            </button>
            <button className="text-xs bg-secondary text-secondary-foreground items-center justify-center py-1 flex gap-1 px-3 rounded-xl h-fit">
              <Heart size={12} />
              <p className="text-xs">11</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col px-3 py-1 gap-1.5">
          <p className="text-card-foreground text-sm  tracking-wider">
            今日朝ご飯は、鮭と卵焼きを作りました。味噌汁は具をいっぱい入れました。
          </p>
          <div className="flex gap-0.5 items-end text-muted-foreground">
            <MessageSquareText size={15} />
            <p className="text-xs tracking-wider">コメントを追加</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
