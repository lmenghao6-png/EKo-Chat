"use client";

import { useState, useMemo } from 'react';
import { PlusIcon, SearchIcon, MessageSquare, Trash2, Edit, User, Settings, Menu, X, Sun, Moon } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { useTheme } from '@/context/ThemeProvider';

const Sidebar = () => {
  const { 
    conversations, 
    activeConversationId,
    setActiveConversationId,
    createNewConversation,
    deleteConversation,
    updateConversationTitle
  } = useChat();
  const { theme, setTheme } = useTheme();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredConversations = useMemo(() => 
    conversations.filter(c => 
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [conversations, searchTerm]);

  const handleEdit = (conv: { id: string; title: string }) => {
    setEditingId(conv.id);
    setEditingTitle(conv.title);
  };

  const handleSave = (id: string) => {
    if (editingTitle.trim()) {
      updateConversationTitle(id, editingTitle);
    }
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    deleteConversation(id);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-4 left-4 z-20 p-2 bg-background/50 backdrop-blur-sm rounded-full md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        flex flex-col h-full w-72 flex-shrink-0 bg-secondary/30 backdrop-blur-xl p-4 shadow-lg
        transform transition-transform duration-300 ease-in-out
        fixed md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        z-10
      `}>
        <div className="relative mb-4">
          <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索会话..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-background border rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-ring"
          />
        </div>
        <button 
          onClick={createNewConversation}
          className="flex items-center justify-center w-full bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors mb-4"
        >
          <PlusIcon size={20} className="mr-2" />
          新建对话
        </button>
        <div className="flex-grow overflow-y-auto -mr-4 pr-4">
          <ul>
            {filteredConversations.map((conv) => (
              <li 
                key={conv.id} 
                onClick={() => {
                  setActiveConversationId(conv.id);
                  setIsSidebarOpen(false); // Close sidebar on selection
                }}
                className={`flex items-center justify-between p-2 my-1 rounded-lg group transition-colors cursor-pointer ${
                  activeConversationId === conv.id ? 'bg-accent' : 'hover:bg-accent'
                }`}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <MessageSquare size={16} className="mr-3 flex-shrink-0" />
                  {editingId === conv.id ? (
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      onBlur={() => handleSave(conv.id)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSave(conv.id)}
                      className="bg-transparent border-b focus:outline-none w-full"
                      autoFocus
                    />
                  ) : (
                    <span className="flex-1 truncate">{conv.title}</span>
                  )}
                </div>
                <div className="hidden group-hover:flex items-center ml-2">
                  <button onClick={(e) => { e.stopPropagation(); handleEdit(conv); }} className="p-1 hover:text-primary">
                    <Edit size={14} />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(conv.id); }} className="p-1 hover:text-destructive">
                    <Trash2 size={14} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pt-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <User size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">用户名</p>
              </div>
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-muted-foreground hover:text-foreground"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="p-2 text-muted-foreground hover:text-foreground">
                <Settings size={18} />
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
