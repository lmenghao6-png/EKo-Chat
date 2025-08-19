"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 类型定义
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

interface ChatContextType {
  conversations: Conversation[];
  activeConversationId: string | null;
  setActiveConversationId: (id: string | null) => void;
  getConversationById: (id: string) => Conversation | undefined;
  createNewConversation: () => void;
  deleteConversation: (id: string) => void;
  updateConversationTitle: (id: string, title: string) => void;
  sendMessage: (conversationId: string | null, content: string) => Promise<void>;
  isLoading: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getConversationById = (id: string) => {
    return conversations.find((c) => c.id === id);
  };

  const createNewConversation = () => {
    // 创建一个临时的本地会话，但还不设置active，等第一条消息发送后再正式创建
    const newConversation: Conversation = {
      id: `local-${uuidv4()}`, // 标记为本地临时ID
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

  const sendMessage = async (conversationId: string | null, content: string) => {
    setIsLoading(true);
    const userMessage: Message = { id: uuidv4(), role: 'user', content };

    // 如果是新对话，先在UI上展示用户消息
    if (conversationId && conversationId.startsWith('local-')) {
        setConversations(prev =>
            prev.map(c =>
                c.id === conversationId ? { ...c, messages: [userMessage] } : c
            )
        );
    } else if (conversationId) {
        setConversations(prev =>
            prev.map(c =>
                c.id === conversationId ? { ...c, messages: [...c.messages, userMessage] } : c
            )
        );
    }

    try {
      const res = await fetch('/api/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            message: content, 
            // 如果是本地临时会话，不传ID，让后端创建新的
            conversationId: conversationId && !conversationId.startsWith('local-') ? conversationId : null 
        }),
      });

      if (!res.ok) {
        throw new Error('API request failed');
      }

      const data = await res.json();
      const { finalAnswer, conversationId: newConversationId } = data;

      const aiMessage: Message = {
        id: finalAnswer.id,
        role: 'assistant',
        content: finalAnswer.text,
      };

      // 更新会话状态
      setConversations(prev => {
        const conversationExists = prev.some(c => c.id === newConversationId);
        if (conversationExists) {
            // 将AI消息添加到现有对话中
            return prev.map(c => 
                c.id === newConversationId ? { ...c, messages: [...c.messages, aiMessage] } : c
            );
        } else {
            // 这是一个新对话，用后端返回的ID替换本地临时ID
            return prev.map(c => {
                if(c.id === conversationId) { // 找到那个临时的对话
                    return {
                        id: newConversationId,
                        title: content.substring(0, 20), // 使用消息内容作为标题
                        messages: [userMessage, aiMessage],
                    }
                }
                return c;
            });
        }
      });
      // 激活新的或更新的会话
      setActiveConversationId(newConversationId);

    } catch (error) {
      console.error("Failed to send message:", error);
      // 可以在这里添加错误状态处理
    } finally {
      setIsLoading(false);
    }
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
    isLoading,
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
