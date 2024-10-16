import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface PostHeaderProps {
  username: string;
  time: string;
  category: string;
  avatarImageSrc?: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  username,
  time,
  category,
  avatarImageSrc,
}) => {
  return (
    <div className="flex items-end justify-between px-3">
      <div className="flex gap-2 items-center">
        <Link href="/my-page">
          <Avatar className="w-[30px] h-[30px]">
            <AvatarImage src={avatarImageSrc} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-card-foreground font-semibold text-sm">
            {username}
          </p>
          <p className="text-muted-foreground text-xs">{time}</p>
        </div>
      </div>
      <p className="text-xs py-1.5 px-4 bg-primary/80 text-primary-foreground font-semibold tracking-widest rounded-sm">
        {category}
      </p>
    </div>
  );
};

export default PostHeader;
