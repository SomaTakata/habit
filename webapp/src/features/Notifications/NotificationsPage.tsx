import Link from "next/link";
import {
  NotificationTabs,
  NotificationTabsContent,
  NotificationTabsList,
  NotificationTabsTrigger,
} from "./NotificationTabs";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const NotificationsPage = () => {
  return (
    <div className="flex flex-col p-3 px-5  pb-[78px]">
      <NotificationTabs
        defaultValue="account"
        className="flex flex-col items-center "
      >
        <NotificationTabsList>
          <NotificationTabsTrigger value="all">すべて</NotificationTabsTrigger>
          <NotificationTabsTrigger value="comment">
            コメント
          </NotificationTabsTrigger>
          <NotificationTabsTrigger value="like">いいね</NotificationTabsTrigger>
        </NotificationTabsList>
        <NotificationTabsContent className="pt-10" value="all">
          <div className="flex flex-col gap-7">
            <div className="flex w-full gap-2 items-center">
              <div className="flex gap-3 items-center">
                <Link href="/my-page">
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <p className="text-sm tracking-wide font-medium">
                  <span className="font-semibold">soma_takata</span>
                  があなたの投稿にいいねしました。
                  <span className="text-muted-foreground/50 ml-1">2時間前</span>
                </p>
              </div>
              <div className="h-10 w-10 relative aspect-square">
                <Image
                  src="/breakfast.jpeg"
                  fill
                  alt="Image"
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 items-center">
              <div className="flex gap-3 items-center">
                <Link href="/my-page">
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <p className="text-sm tracking-wide font-medium">
                  <span className="font-semibold">soma_takata</span>
                  があなたの投稿にコメントしました。
                  <span className="text-muted-foreground/50 ml-1">2時間前</span>
                </p>
              </div>
              <div className="h-10 w-10 relative aspect-square">
                <Image
                  src="/breakfast.jpeg"
                  fill
                  alt="Image"
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </NotificationTabsContent>
        <NotificationTabsContent className="pt-10" value="comment">
          <div className="flex flex-col gap-7">
            <div className="flex w-full gap-2 items-center">
              <div className="flex gap-3 items-center">
                <Link href="/my-page">
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <p className="text-sm tracking-wide font-medium">
                  <span className="font-semibold">soma_takata</span>
                  があなたの投稿にコメントしました。
                  <span className="text-muted-foreground/50 ml-1">2時間前</span>
                </p>
              </div>
              <div className="h-10 w-10 relative aspect-square">
                <Image
                  src="/breakfast.jpeg"
                  fill
                  alt="Image"
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </NotificationTabsContent>
        <NotificationTabsContent className="pt-10" value="like">
          <div className="flex flex-col gap-7">
            <div className="flex w-full gap-2 items-center">
              <div className="flex gap-3 items-center">
                <Link href="/my-page">
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <p className="text-sm tracking-wide font-medium">
                  <span className="font-semibold">soma_takata</span>
                  があなたの投稿にいいねしました。
                  <span className="text-muted-foreground/50 ml-1">2時間前</span>
                </p>
              </div>
              <div className="h-10 w-10 relative aspect-square">
                <Image
                  src="/breakfast.jpeg"
                  fill
                  alt="Image"
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </NotificationTabsContent>
      </NotificationTabs>
    </div>
  );
};

export default NotificationsPage;
