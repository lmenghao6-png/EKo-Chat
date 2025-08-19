"use client";

import { useState, useRef, useEffect } from 'react';
import { SendHorizonal, Paperclip, Image as ImageIcon } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  isInitial?: boolean;
  isLoading?: boolean;
}

const ChatInput = ({ onSendMessage, isInitial = false, isLoading = false }: ChatInputProps) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div 
      ref={containerRef}
      className={`transition-all duration-500 ease-in-out w-full ${isInitial ? 'p-0' : 'p-4 bg-background'}`}
      style={isInitial ? { position: 'absolute', bottom: '35%', left: '50%', transform: 'translateX(-50%)', maxWidth: '36rem' } : { maxWidth: '48rem', margin: '0 auto' }}
    >
      <div className="relative flex items-center p-2 border rounded-2xl bg-secondary/50 shadow-lg backdrop-blur-sm">
        <button className="p-2 text-muted-foreground hover:text-primary">
            <Paperclip size={20} />
        </button>
        <button className="p-2 text-muted-foreground hover:text-primary">
            <ImageIcon size={20} />
        </button>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="向 EKo-Aggregator Chat 发送消息..."
          className="w-full h-auto p-2 bg-transparent resize-none focus:outline-none max-h-48"
          rows={1}
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          className="p-3 ml-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
          disabled={!input.trim() || isLoading}
        >
          <SendHorizonal size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
