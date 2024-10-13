import React from "react";
import CommentItem from "./CommentItem";

const comments = [
  {
    username: "Soma Takata",
    time: "2時間前",
    content:
      "すごくおいしそうですね！！食べてみたいです。すごくおいしそうですね！！食べてみたいです。",
  },
  {
    username: "Soma Takata",
    time: "2時間前",
    content: "美味しそうですね！",
  },
  // 他のコメントも追加可能
];

const CommentList: React.FC = () => {
  return (
    <div className="flex flex-col p-4 gap-5 overflow-y-auto max-h-[calc(100vh-400px)]">
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          username={comment.username}
          time={comment.time}
          content={comment.content}
        />
      ))}
    </div>
  );
};

export default CommentList;
