"use client";

import * as React from "react";
import { GoalSetDialogContent } from "./GoalSetModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoalDetailButton from "./GoalDetailButton";

const GoalSetPage = () => {
  return (
    <GoalSetDialogContent className="w-full h-full">
      <div className="h-full flex flex-col items-center justify-center gap-20 pt-20 w-full">
        <div className="flex flex-col gap-6 items-center w-full">
          <div className="flex flex-col gap-3 w-full items-center">
            <p className="text-lg font-bold text-muted-foreground">
              習慣にしたいことは何ですか？
            </p>
            <Input placeholder="朝ご飯を作る" className="min-h-14" />
          </div>
          <GoalDetailButton />
        </div>
        <div className="flex flex-col gap-3 items-center w-full">
          <p className="text-sm font-bold text-muted-foreground">例えば...</p>
          <div className="w-full flex flex-col gap-3 text-muted-foreground">
            <Button variant="outline" className="w-full">
              🥗 朝ご飯をつくる
            </Button>
            <Button variant="outline" className="w-full">
              ‍♀️ 散歩をする
            </Button>
            <Button variant="outline" className="w-full">
              🦾 筋トレをする
            </Button>
          </div>
        </div>
      </div>
    </GoalSetDialogContent>
  );
};

export default GoalSetPage;
