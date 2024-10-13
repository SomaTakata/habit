import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CommentInput: React.FC = () => {
  return (
    <div className="absolute flex gap-2 p-3 bottom-0 left-0 right-0 border-t border-border/50">
      <Input type="text" placeholder="コメントを入力..." />
      <Button>送信</Button>
    </div>
  );
};

export default CommentInput;
