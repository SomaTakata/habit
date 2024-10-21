"use client";
import { Inter as FontSans } from "next/font/google";
import { ApolloProvider } from "@/components/provider/ApolloProvider";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased max-w-screen-sm",
          fontSans.variable
        )}
      >
        <ApolloProvider>
          <main className="h-full">{children}</main>
          {pathname !== "/camera" && <Navbar />}
        </ApolloProvider>
      </body>
    </html>
  );
}
