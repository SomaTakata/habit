import React from "react";
import NotificationCard from "./NotificationCard";
import {
  NotificationTabs,
  NotificationTabsContent,
  NotificationTabsList,
  NotificationTabsTrigger,
} from "./NotificationTabs";

const NotificationsPage = () => {
  return (
    <div className="flex flex-col p-3 px-5 pb-[78px]">
      <NotificationTabs
        defaultValue="all"
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
            <NotificationCard
              username="soma_takata"
              actionType="like"
              time="2時間前"
              avatarSrc="https://github.com/shadcn.png"
              imageSrc="/breakfast.jpeg"
            />
            <NotificationCard
              username="soma_takata"
              actionType="comment"
              time="2時間前"
              avatarSrc="https://github.com/shadcn.png"
              imageSrc="/breakfast.jpeg"
            />
          </div>
        </NotificationTabsContent>
        <NotificationTabsContent className="pt-10" value="comment">
          <div className="flex flex-col gap-7">
            <NotificationCard
              username="soma_takata"
              actionType="comment"
              time="2時間前"
              avatarSrc="https://github.com/shadcn.png"
              imageSrc="/breakfast.jpeg"
            />
          </div>
        </NotificationTabsContent>
        <NotificationTabsContent className="pt-10" value="like">
          <div className="flex flex-col gap-7">
            <NotificationCard
              username="soma_takata"
              actionType="like"
              time="2時間前"
              avatarSrc="https://github.com/shadcn.png"
              imageSrc="/breakfast.jpeg"
            />
          </div>
        </NotificationTabsContent>
      </NotificationTabs>
    </div>
  );
};

export default NotificationsPage;
