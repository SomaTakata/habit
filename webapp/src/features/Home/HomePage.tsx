import React from "react";
import PostCard from "./PostCard";

const HomePage = () => {
  return (
    <div className="flex flex-col pb-[78px]">
      <PostCard
        username="Soma Takata"
        time="09:27"
        category="朝ご飯"
        content="今日朝ご飯は、鮭と卵焼きを作りました。味噌汁は具をいっぱい入れました。"
        commentCount={2}
        likeCount={10}
      />
      <PostCard
        username="Soma Takata"
        time="09:27"
        category="朝ご飯"
        content="今日朝ご飯は、鮭と卵焼きを作りました。味噌汁は具をいっぱい入れました。"
        commentCount={2}
        likeCount={11}
      />
    </div>
  );
};

export default HomePage;
