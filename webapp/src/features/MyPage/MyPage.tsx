"use client";

import * as React from "react";
import { MyPageCalendar } from "./MyPageCalendar";
import MyPageHeader from "./MyPageHeader";
import MyPageProgressBar from "./MyPageProgressBar";
import MyPagePostList from "./MyPagePostList";

const MyPage = () => {
  const current = 2;
  const total = 3;

  return (
    <div className="flex flex-col gap-10 px-5 pt-10 pb-24">
      <MyPageHeader />
      <MyPageProgressBar current={current} total={total} />
      <MyPagePostList />
      <div className="flex flex-col gap-3 w-full">
        <p className="font-bold text-sm text-muted-foreground">今日の達成度</p>
        <MyPageCalendar />
      </div>
    </div>
  );
};

export default MyPage;
