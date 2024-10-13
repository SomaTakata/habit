"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Camera, Flag, Bell, User } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex pt-2 pb-7 px-2.5 fixed bottom-0 left-0 right-0 bg-background border-[0.5px] border-border/80 justify-around">
      <NavItem
        name="ホーム"
        href="/"
        isActive={isActive(pathname, "/")}
        icon={
          <House
            size={20}
            fill={isActive(pathname, "/") ? "currentColor" : "none"}
          />
        }
      />
      <NavItem
        name="目標"
        href="/flag"
        isActive={isActive(pathname, "/flag")}
        icon={
          <Flag
            size={20}
            fill={isActive(pathname, "/flag") ? "currentColor" : "none"}
          />
        }
      />
      <NavItem
        href="/camera"
        isActive={isActive(pathname, "/camera")}
        icon={
          <Camera
            size={20}
            className="p-2.5 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center"
            fill={isActive(pathname, "/camera") ? "currentColor" : "none"}
          />
        }
      />
      <NavItem
        name="通知"
        href="/notifications"
        isActive={isActive(pathname, "/notifications")}
        icon={
          <Bell
            size={20}
            fill={
              isActive(pathname, "/notifications") ? "currentColor" : "none"
            }
          />
        }
      />
      <NavItem
        name="マイページ"
        href="/my-page"
        isActive={isActive(pathname, "/my-page")}
        icon={
          <User
            size={20}
            fill={isActive(pathname, "/my-page") ? "currentColor" : "none"}
          />
        }
      />
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
      {name && <span className={cn("text-[9px]")}>{name}</span>}
    </Link>
  );
}

const isActive = (pathname: string, href: string) => {
  return pathname === href || pathname.startsWith(`${href}/`);
};
