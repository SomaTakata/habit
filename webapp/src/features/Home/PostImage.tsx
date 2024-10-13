import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { MessageSquareText } from "lucide-react";
import HeartButton from "./HeartButton";

interface PostImageProps {
  commentCount: number;
  likeCount: number;
}

const PostImage: React.FC<PostImageProps> = ({ commentCount, likeCount }) => {
  return (
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
        <button className="bg-secondary min-w-14 text-secondary-foreground items-center justify-center py-1 flex gap-1 px-3 rounded-xl h-fit">
          <MessageSquareText size={12} />
          <p className="text-xs">{commentCount}</p>
        </button>
        <HeartButton initialCount={likeCount} />
      </div>
    </div>
  );
};

export default PostImage;
