"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import * as React from "react";
import { MyPageCalendar } from "./MyPageCalendar";
import { Settings } from "lucide-react";

const MyPage = () => {
  const current = 2;
  const total = 3;
  const percentage = (current / total) * 100;

  return (
    <div className="flex flex-col gap-10 px-5 pt-10 pb-24">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20112%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EAvataaars%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3EPablo%20Stanley%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Favataaars.com%2F%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Favataaars.com%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3ERemix%20of%20%E2%80%9EAvataaars%E2%80%9D%20(https%3A%2F%2Favataaars.com%2F)%20by%20%E2%80%9EPablo%20Stanley%E2%80%9D%2C%20licensed%20under%20%E2%80%9EFree%20for%20personal%20and%20commercial%20use.%E2%80%9D%20(https%3A%2F%2Favataaars.com%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%23ae5d29%22%20width%3D%22112%22%20height%3D%22112%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Cg%20transform%3D%22translate(2%2063)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M40%2029a14%2014%200%201%201%2028%200%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.7%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(28%2051)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%208c0%204.42%205.37%208%2012%208s12-3.58%2012-8%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.16%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(0%2019)%22%3E%3Cpath%20d%3D%22M44%2022a14%2014%200%201%201-28%200%2014%2014%200%200%201%2028%200ZM96%2022a14%2014%200%201%201-28%200%2014%2014%200%200%201%2028%200Z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M36%2014a6%206%200%201%201-12%200%206%206%200%200%201%2012%200ZM88%2014a6%206%200%201%201-12%200%206%206%200%200%201%2012%200Z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.7%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(0%2011)%22%3E%3Cpath%20d%3D%22M26.55%206.15c-5.8.27-15.2%204.49-14.96%2010.34.01.18.3.27.43.12%202.76-2.96%2022.32-5.95%2029.2-4.36.64.14%201.12-.48.72-.93-3.43-3.85-10.2-5.43-15.4-5.18ZM86.45%206.15c5.8.27%2015.2%204.49%2014.96%2010.34-.01.18-.3.27-.43.12-2.76-2.96-22.32-5.95-29.2-4.36-.64.14-1.12-.48-.72-.93%203.43-3.85%2010.2-5.43%2015.4-5.18Z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.6%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="font-bold text-lg">SomaTakata</p>
        </div>
        <Settings className="text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-sm text-muted-foreground">今日の達成度</p>
        <div className="w-full bg-muted rounded-md h-8 relative">
          <div
            className={`bg-orange-400 h-8 ${percentage === 100 ? "rounded-md" : "rounded-l-md"}`}
            style={{ width: `${percentage}%` }}
          ></div>
          <div
            className={`absolute text-sm right-3 top-2 font-black ${
              percentage === 100
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            {current}/{total}
          </div>
        </div>
      </div>
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
