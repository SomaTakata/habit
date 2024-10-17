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
  avatarImageSrc?: string;
  postImageSrc: string;
}

const PostCard: React.FC<PostCardProps> = ({
  username,
  time,
  category,
  content,
  commentCount,
  likeCount,
  avatarImageSrc,
  postImageSrc,
}) => {
  return (
    <div className="w-full bg-background pb-10 flex flex-col gap-2.5">
      <PostHeader
        username={username}
        time={time}
        category={category}
        avatarImageSrc={avatarImageSrc}
      />
      <PostImage
        postImageSrc={postImageSrc}
        commentCount={commentCount}
        likeCount={likeCount}
      />
      <PostContent content={content} />
    </div>
  );
};

export default PostCard;
