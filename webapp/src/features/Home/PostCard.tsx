import React from "react";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostContent from "./PostContent";

interface PostCardProps {
  username: string;
  time: string;
  category: string;
  content: string;
  commentCount: number;
  likeCount: number;
}

const PostCard: React.FC<PostCardProps> = ({
  username,
  time,
  category,
  content,
  commentCount,
  likeCount,
}) => {
  return (
    <div className="w-full bg-background py-5 flex flex-col gap-2.5">
      <PostHeader username={username} time={time} category={category} />
      <PostImage commentCount={commentCount} likeCount={likeCount} />
      <PostContent content={content} />
    </div>
  );
};

export default PostCard;
