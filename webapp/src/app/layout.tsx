import { Inter as FontSans } from "next/font/google";
import { ApolloProvider } from "@/components/provider/ApolloProvider";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <Navbar />
        </ApolloProvider>
      </body>
    </html>
  );
}
