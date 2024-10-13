import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommentItemProps {
  username: string;
  time: string;
  content: string;
}

const CommentItem: React.FC<CommentItemProps> = ({
  username,
  time,
  content,
}) => {
  return (
    <div className="flex gap-3">
      <Avatar className="w-[30px] h-[30px] mt-1">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <p className="text-sm">{username}</p>
          <p className="text-xs text-muted-foreground">{time}</p>
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default CommentItem;
