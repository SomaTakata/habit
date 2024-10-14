import React from "react";

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <div className="flex flex-col px-3 py-1 gap-1.5">
      <p className="text-card-foreground text-sm tracking-wider">{content}</p>
    </div>
  );
};

export default PostContent;
