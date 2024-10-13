import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostHeaderProps {
  username: string;
  time: string;
  category: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  username,
  time,
  category,
}) => {
  return (
    <div className="flex items-end justify-between px-3">
      <div className="flex gap-2 items-center">
        <Avatar className="w-[30px] h-[30px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
