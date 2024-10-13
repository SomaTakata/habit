import React from "react";
import { MessageSquareText } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

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

          <div className="flex flex-col p-4 gap-5 overflow-y-auto max-h-[calc(100vh-400px)]">
            <div className="flex gap-3">
              <Avatar className="w-[30px] h-[30px] mt-1">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <p className="text-sm">Soma Takata</p>
                  <p className="text-xs text-muted-foreground">2時間前</p>
                </div>
                <p className="text-sm">
                  すごくおいしそうですね！！食べてみたいです。すごくおいしそうですね！！食べてみたいです。
                </p>
              </div>
            </div>
          </div>

          <div className="absolute flex gap-2 p-3 bottom-0 left-0 right-0 border-t border-border/50">
            <Input type="text" placeholder="コメントを入力..." />
            <Button>送信</Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CommentButton;
