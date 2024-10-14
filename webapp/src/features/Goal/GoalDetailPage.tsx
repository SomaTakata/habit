"use client";

import * as React from "react";
import {
  GoalDetailDialogClose,
  GoalDetailDialogContent,
} from "./GoalDetailModal";
import { Flame } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GoalDetailPage = () => {
  return (
    <GoalDetailDialogContent className="w-full h-full z-50">
      <div className="h-full flex flex-col items-center justify-center gap-14 pt-10 w-full">
        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-col gap-5 items-center w-full">
            <Flame size={80} className="text-blue-400" />
            <p className="text-2xl font-black text-muted-foreground">
              「朝ご飯を作る」
            </p>
          </div>
          <Separator />
        </div>
        <div className="flex flex-col gap-3 items-center w-full  relative pb-20">
          <p className="font-bold text-muted-foreground/60">
            テーマカラーを選択できます
          </p>
          <div className="absolute -right-6 -left-6 top-10 overflow-x-auto flex py-8 px-6 bg-gray-50 items-center">
            <div className="flex gap-4">
              <button className="w-6 h-6 rounded-md bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              <button className="w-6 h-6 rounded-md bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <p className="font-bold text-muted-foreground/60">
            通知をONにしますか
          </p>
          <div className="flex gap-10 pl-8 items-center">
            <Switch />
            <Input type="time" />
          </div>
        </div>
        <GoalDetailDialogClose asChild>
          <Button className="w-full" variant="natural">
            作成する
          </Button>
        </GoalDetailDialogClose>
      </div>
    </GoalDetailDialogContent>
  );
};

export default GoalDetailPage;
