"use client";

import { useEffect, useRef } from 'react';
import Header from './Header';
import Message from './Message';
import ChatInput from './ChatInput';
import { Sparkles, FileText, Code, BrainCircuit } from 'lucide-react';
import { useChat } from '@/context/ChatContext';

const ChatWindow = () => {
  const { 
    activeConversationId, 
    getConversationById, 
    sendMessage,
    isLoading
  } = useChat();

  const activeConversation = activeConversationId 
    ? getConversationById(activeConversationId) 
    : null;
    
  const isInitialConversation = !activeConversation || activeConversation.messages.length === 0;

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isInitialConversation) {
      scrollToBottom();
    }
  }, [activeConversation?.messages, isInitialConversation]);


  const handleSendMessage = (content: string) => {
    if (activeConversationId) {
      sendMessage(activeConversationId, content);
    }
  };
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return '上午好，有什么可以帮您的吗？';
    }
    return '下午好，今天研究些什么？';
  };
  
  const inspirationPrompts = [
      { icon: <FileText />, text: "帮我起草一封邮件" },
      { icon: <Code />, text: "用Python写一个二分查找" },
      { icon: <BrainCircuit />, text: "解释一下什么是量子纠缠" },
  ];

  return (
    <div className="relative flex flex-col h-full w-full bg-background overflow-hidden">
      <Header />
      <div className="flex-grow overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {isInitialConversation ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground" style={{minHeight: '60vh'}}>
              <Sparkles size={48} className="mb-4 text-primary" />
              <p className="text-lg text-center mb-8">{getGreeting()}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  {inspirationPrompts.map((prompt, index) => (
                      <button 
                        key={index}
                        onClick={() => handleSendMessage(prompt.text)}
                        className="p-4 border rounded-lg bg-secondary/50 hover:bg-accent transition-colors flex items-center space-x-4"
                      >
                          {prompt.icon}
                          <span className="text-sm text-left">{prompt.text}</span>
                      </button>
                  ))}
              </div>
            </div>
          ) : (
            activeConversation?.messages.map((msg) => (
              <Message key={msg.id} role={msg.role} content={msg.content} />
            ))
          )}
         <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput onSendMessage={handleSendMessage} isInitial={isInitialConversation} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;
