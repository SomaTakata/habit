"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Camera, Flag, Bell, User } from "lucide-react";
import React from "react";

const navItems = [
  {
    name: "ホーム",
    href: "/",
    icon: <House size={20} />,
  },
  {
    name: "目標",
    href: "/goal",
    icon: <Flag size={20} />,
  },
  {
    href: "/camera",
    icon: (
      <Camera
        size={20}
        className="p-2.5 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center"
      />
    ),
  },
  {
    name: "通知",
    href: "/notifications",
    icon: <Bell size={20} />,
  },
  {
    name: "マイページ",
    href: "/my-page",
    icon: <User size={20} />,
  },
];
export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex pt-2 pb-7 px-2.5 fixed bottom-0 left-0 right-0 bg-background border-[0.5px] border-border/80 justify-around">
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          name={item.name}
          href={item.href}
          isActive={isActive(pathname, item.href)}
          icon={React.cloneElement(item.icon, {
            fill: isActive(pathname, item.href) ? "currentColor" : "none",
          })}
        />
      ))}
    </nav>
  );
}

function NavItem({
  name,
  href,
  isActive,
  icon,
}: {
  name?: string;
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn("gap-0.5 flex flex-col items-center justify-end", {
        "text-primary font-bold": isActive,
        "text-muted-foreground": !isActive,
      })}
    >
      {icon}
      {name && <span className="text-[9px]">{name}</span>}
    </Link>
  );
}

const isActive = (pathname: string, href: string) => {
  return pathname === href || pathname.startsWith(`${href}/`);
};
