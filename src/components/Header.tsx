"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-start p-4 bg-background/80 backdrop-blur-sm h-16 z-10 shadow-sm">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        EKo-Aggregator Chat
      </h1>
    </header>
  );
};

export default Header;
