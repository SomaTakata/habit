import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import HeartButton from "./HeartButton";
import CommentButton from "./CommentButton";

interface PostImageProps {
  commentCount: number;
  likeCount: number;
  postImageSrc: string;
}

const PostImage: React.FC<PostImageProps> = ({
  commentCount,
  likeCount,
  postImageSrc,
}) => {
  return (
    <div className="w-full relative">
      <AspectRatio ratio={1 / 1}>
        <Image src={postImageSrc} fill alt="Image" className="object-cover" />
      </AspectRatio>
      <div className="absolute flex gap-2 bottom-3 right-3">
        <CommentButton commentCount={commentCount} />
        <HeartButton initialCount={likeCount} />
      </div>
    </div>
  );
};

export default PostImage;
