import React from "react";
import { MessageSquareText } from "lucide-react";
import CommentButton from "./CommentButton";

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <div className="flex flex-col px-3 py-1 gap-1.5">
      <p className="text-card-foreground text-sm tracking-wider">{content}</p>
      <CommentButton commentCount={0}>
        <div className="flex gap-0.5 items-end text-muted-foreground cursor-pointer">
          <MessageSquareText size={15} />
          <p className="text-xs tracking-wider">コメントを追加</p>
        </div>
      </CommentButton>
    </div>
  );
};

export default PostContent;
