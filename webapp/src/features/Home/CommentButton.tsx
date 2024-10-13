import React, { ReactNode } from "react";
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
  children?: ReactNode;
}

const CommentButton: React.FC<CommentButtonProps> = ({ children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
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
