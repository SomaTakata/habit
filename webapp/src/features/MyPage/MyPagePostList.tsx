"use client";

import React from "react";
import MyPagePostCard from "./MyPagePostCard";

const MyPagePostList = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-sm text-muted-foreground">今日の投稿</p>
      <div className="flex gap-3 overflow-x-auto">
        <MyPagePostCard
          imageSrc="/breakfast.jpeg"
          label="朝ご飯"
          time="09:17"
        />
        <MyPagePostCard
          imageSrc="/breakfast2.jpg"
          label="朝ご飯"
          time="09:17"
        />
        <MyPagePostCard
          imageSrc="/breakfast2.jpg"
          label="朝ご飯"
          time="09:17"
        />
      </div>
    </div>
  );
};

export default MyPagePostList;
