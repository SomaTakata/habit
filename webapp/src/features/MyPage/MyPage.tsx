"use client";

import Image from "next/image";
import * as React from "react";
import { MyPageCalendar } from "./MyPageCalendar";
import MyPageHeader from "./MyPageHeader";
import MyPageProgressBar from "./MyPageProgressBar";

const MyPage = () => {
  const current = 2;
  const total = 3;

  return (
    <div className="flex flex-col gap-10 px-5 pt-10 pb-24">
      <MyPageHeader />
      <MyPageProgressBar current={current} total={total} />
      <div className="flex flex-col gap-3">
        <p className="font-bold text-sm text-muted-foreground">今日の投稿</p>
        <div className="flex gap-3 overflow-x-auto">
          <div className="flex flex-col gap-2 p-2 bg-background border shadow-lg rounded-lg relative">
            <p className="absolute text-primary-foreground bg-orange-400 top-3 right-3 rounded-sm z-50 px-3 py-1 text-xs font-bold tracking-wider">
              朝ご飯
            </p>
            <div className="w-56 relative aspect-square">
              <Image
                src="/breakfast.jpeg"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-full flex justify-end">
              <p className="text-xs text-muted-foreground">09:17</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2 bg-background border shadow-lg rounded-lg relative">
            <p className="absolute text-primary-foreground bg-orange-400 top-3 right-3 rounded-sm z-50 px-3 py-1 text-xs font-bold tracking-wider">
              朝ご飯
            </p>
            <div className="w-56 relative aspect-square">
              <Image
                src="/breakfast2.jpg"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-full flex justify-end">
              <p className="text-xs text-muted-foreground">09:17</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2 bg-background border shadow-lg rounded-lg relative">
            <p className="absolute text-primary-foreground bg-orange-400 top-3 right-3 rounded-sm z-50 px-3 py-1 text-xs font-bold tracking-wider">
              朝ご飯
            </p>
            <div className="w-56 relative aspect-square">
              <Image
                src="/breakfast2.jpg"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-full flex justify-end">
              <p className="text-xs text-muted-foreground">09:17</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <p className="font-bold text-sm text-muted-foreground">今日の達成度</p>
        <MyPageCalendar />
      </div>
    </div>
  );
};

export default MyPage;
