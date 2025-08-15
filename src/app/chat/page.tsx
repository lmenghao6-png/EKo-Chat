"use client";

import { useState, useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import Skeleton from '@/components/Skeleton';
import PageTransition from '@/components/PageTransition';
import { useChat } from '@/context/ChatContext';

export default function ChatPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { createNewConversation } = useChat();

  useEffect(() => {
    // 进入页面时创建新对话
    createNewConversation();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 缩短加载时间以获得更好的体验

    return () => clearTimeout(timer);
  }, []); // 依赖项为空数组，确保只在首次加载时运行

  if (isLoading) {
    return (
      <PageTransition>
        <Skeleton />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="flex h-screen w-full bg-background">
        <Sidebar />
        <div className="flex flex-col w-full">
          <ChatWindow />
        </div>
      </main>
    </PageTransition>
  );
}
