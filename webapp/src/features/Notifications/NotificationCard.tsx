import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

type NotificationCardProps = {
  username: string;
  actionType: "like" | "comment";
  time: string;
  avatarSrc: string;
  imageSrc?: string;
};

const NotificationCard = ({
  username,
  actionType,
  time,
  avatarSrc,
  imageSrc,
}: NotificationCardProps) => {
  const actionMessage =
    actionType === "like"
      ? "があなたの投稿にいいねしました。"
      : "があなたの投稿にコメントしました。";

  return (
    <div className="flex w-full gap-2 items-center">
      <div className="flex gap-3 items-center">
        <Link href="/my-page">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </Link>
        <p className="text-sm tracking-wide font-medium">
          <span className="font-semibold">{username}</span>
          {actionMessage}
          <span className="text-muted-foreground/50 ml-1">{time}</span>
        </p>
      </div>
      {imageSrc && (
        <div className="h-10 w-10 relative aspect-square">
          <Image
            src={imageSrc}
            fill
            alt="Image"
            className="object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
