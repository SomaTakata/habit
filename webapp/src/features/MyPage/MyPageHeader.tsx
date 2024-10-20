"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import SettingsDetailButton from "../Settings/SettingsButton";

const MyPageHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Avatar className="w-[40px] h-[40px]">
          <AvatarImage src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20112%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EAvataaars%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3EPablo%20Stanley%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Favataaars.com%2F%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Favataaars.com%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3ERemix%20of%20%E2%80%9EAvataaars%E2%80%9D%20(https%3A%2F%2Favataaars.com%2F)%20by%20%E2%80%9EPablo%20Stanley%E2%80%9D%2C%20licensed%20under%20%E2%80%9EFree%20for%20personal%20and%20commercial%20use.%E2%80%9D%20(https%3A%2F%2Favataaars.com%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22112%22%20height%3D%22112%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%23f8d25c%22%20width%3D%22112%22%20height%3D%22112%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Cg%20transform%3D%22translate(2%2063)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M35.12%2015.13a19%2019%200%200%200%2037.77-.09c.08-.77-.77-2.04-1.85-2.04H37.1C36%2013%2035%2014.18%2035.12%2015.13Z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.7%22%2F%3E%3Cpath%20d%3D%22M70%2013H39a5%205%200%200%200%205%205h21a5%205%200%200%200%205-5Z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M66.7%2027.14A10.96%2010.96%200%200%200%2054%2025.2a10.95%2010.95%200%200%200-12.7%201.94A18.93%2018.93%200%200%200%2054%2032c4.88%200%209.33-1.84%2012.7-4.86Z%22%20fill%3D%22%23FF4F6D%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(28%2051)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%208c0%204.42%205.37%208%2012%208s12-3.58%2012-8%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.16%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(0%2019)%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%22.6%22%3E%3Cpath%20d%3D%22M36%2022a6%206%200%201%201-12%200%206%206%200%200%201%2012%200Z%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M70.6%2024.96c1.59-3.92%205.55-6.86%2010.37-7.2%204.8-.33%209.12%202%2011.24%205.64.63%201.09-.1%202.06-.93%201.43-2.6-1.93-6.15-3-10-2.73A15.13%2015.13%200%200%200%2071.95%2026c-.84.78-1.81.1-1.35-1.04Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(0%2011)%22%3E%3Cpath%20d%3D%22M15.6%2014.16c4.49-6.32%2014-9.5%2023.75-6.36a2%202%200%201%200%201.23-3.81c-11.41-3.68-22.74.1-28.25%207.85a2%202%200%201%200%203.26%202.32ZM96.38%2021.16c-3.92-5.51-14.65-8.6-23.9-6.33a2%202%200%200%201-.95-3.88c10.74-2.64%2023.17.94%2028.1%207.9a2%202%200%201%201-3.25%202.3Z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.6%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-bold text-lg">SomaTakata</p>
      </div>
      <SettingsDetailButton />
    </div>
  );
};

export default MyPageHeader;
