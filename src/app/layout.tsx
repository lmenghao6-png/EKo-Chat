"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/context/ChatContext";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <div className="relative z-10">
          <ThemeProvider>
            <ChatProvider>
              {children}
            </ChatProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
