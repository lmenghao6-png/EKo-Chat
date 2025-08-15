"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 类型定义
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

interface ChatContextType {
  conversations: Conversation[];
  activeConversationId: string | null;
  setActiveConversationId: (id: string) => void;
  getConversationById: (id: string) => Conversation | undefined;
  createNewConversation: () => void;
  deleteConversation: (id: string) => void;
  updateConversationTitle: (id: string, title: string) => void;
  sendMessage: (conversationId: string, content: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// 初始模拟数据
const initialConversations: Conversation[] = [
  {
    id: '1',
    title: '你好',
    messages: [
      { id: uuidv4(), role: 'user', content: '你好' },
      { id: uuidv4(), role: 'assistant', content: '你好！有什么可以帮助你的吗？' },
    ],
  },
  {
    id: '2',
    title: '帮我写一个快速排序算法',
    messages: [
        { id: uuidv4(), role: 'user', content: '帮我写一个快速排序算法' },
        { id: uuidv4(), role: 'assistant', content: '当然，这是用 TypeScript 实现的快速排序算法...' },
    ],
  },
];

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(
    initialConversations.length > 0 ? initialConversations[0].id : null
  );

  const getConversationById = (id: string) => {
    return conversations.find((c) => c.id === id);
  };

  const createNewConversation = () => {
    const newConversation: Conversation = {
      id: uuidv4(),
      title: '新的对话',
      messages: [],
    };
    setConversations([newConversation, ...conversations]);
    setActiveConversationId(newConversation.id);
  };

  const deleteConversation = (id: string) => {
    setConversations(conversations.filter((c) => c.id !== id));
    if (activeConversationId === id) {
      setActiveConversationId(conversations.length > 1 ? conversations[0].id : null);
    }
  };

  const updateConversationTitle = (id: string, title: string) => {
    setConversations(
      conversations.map((c) => (c.id === id ? { ...c, title } : c))
    );
  };

  const sendMessage = (conversationId: string, content: string) => {
    const userMessage: Message = { id: uuidv4(), role: 'user', content };
    
    // 1. 先添加用户消息
    setConversations(prev => 
      prev.map(c => 
        c.id === conversationId ? { ...c, messages: [...c.messages, userMessage] } : c
      )
    );

    // 2. 添加一个空的 AI 消息用于流式输出
    const aiMessageId = uuidv4();
    const aiMessage: Message = { id: aiMessageId, role: 'assistant', content: '', isStreaming: true };
    setConversations(prev => 
      prev.map(c => 
        c.id === conversationId ? { ...c, messages: [...c.messages, aiMessage] } : c
      )
    );

    // 3. 模拟流式响应
    const streamText = `这是对您消息 "${content}" 的一个模拟流式回复。通过逐字输出，我们可以创造出更真实的对话体验。`;
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < streamText.length) {
        setConversations(prev =>
          prev.map(c => {
            if (c.id === conversationId) {
              const newMessages = c.messages.map(m =>
                m.id === aiMessageId ? { ...m, content: streamText.substring(0, currentIndex + 1) } : m
              );
              return { ...c, messages: newMessages };
            }
            return c;
          })
        );
        currentIndex++;
      } else {
        // 4. 流式输出结束，清除标记
        clearInterval(interval);
        setConversations(prev =>
          prev.map(c => {
            if (c.id === conversationId) {
              const newMessages = c.messages.map(m =>
                m.id === aiMessageId ? { ...m, isStreaming: false } : m
              );
              return { ...c, messages: newMessages };
            }
            return c;
          })
        );
      }
    }, 50); // 控制打字速度
  };


  const value = {
    conversations,
    activeConversationId,
    setActiveConversationId,
    getConversationById,
    createNewConversation,
    deleteConversation,
    updateConversationTitle,
    sendMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
