import React from "react";
import { MessageSquareText } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";

interface CommentButtonProps {
  commentCount: number;
}

const CommentButton: React.FC<CommentButtonProps> = ({ commentCount }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="bg-secondary text-secondary-foreground items-center justify-center py-1 flex gap-1 px-3 rounded-xl h-fit">
          <MessageSquareText size={12} />
          <p className="text-xs">{commentCount}</p>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col h-full relative pb-20">
          <DrawerHeader className="border-b border-border/50">
            <DrawerTitle>コメント</DrawerTitle>
          </DrawerHeader>
          <CommentList />
          <CommentInput />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CommentButton;
