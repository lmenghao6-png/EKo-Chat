"use client";

import { User, Bot, Copy, RefreshCw } from 'lucide-react';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

const Message = ({ role, content, isStreaming }: MessageProps) => {
  const isUser = role === 'user';
  const Avatar = isUser ? User : Bot;
  
  const bubbleStyles = isUser
    ? 'bg-card text-card-foreground border rounded-br-none shadow-sm'
    : 'bg-secondary text-secondary-foreground rounded-bl-none';
  
  const layoutStyles = isUser ? 'justify-end' : 'justify-start';
  const avatarOrder = isUser ? 'order-2' : 'order-1';
  const bubbleOrder = isUser ? 'order-1 mr-4' : 'order-2 ml-4';

  return (
    <div className={`flex items-start ${layoutStyles} animate-fade-in`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center ${avatarOrder}`}>
        <Avatar size={20} />
      </div>
      <div className={`flex flex-col ${bubbleOrder}`}>
        <div className={`p-4 rounded-2xl max-w-2xl ${bubbleStyles}`}>
          <div className="prose dark:prose-invert max-w-none prose-p:my-0 prose-pre:bg-transparent prose-pre:p-0">
            {content}
            {isStreaming && <span className="animate-pulse">|</span>}
          </div>
        </div>
        {!isUser && !isStreaming && (
          <div className="mt-2 flex items-center space-x-3 text-muted-foreground animate-fade-in">
            <button className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Copy size={14} />
            </button>
            <button className="flex items-center space-x-1 hover:text-primary transition-colors">
              <RefreshCw size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
