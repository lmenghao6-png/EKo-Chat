import React from 'react';

const Skeleton = () => {
  return (
    <div className="flex h-screen w-full bg-background animate-pulse">
      {/* Sidebar Skeleton */}
      <div className="w-72 flex-shrink-0 bg-secondary/30 p-4 space-y-4">
        <div className="h-10 bg-muted rounded-lg"></div>
        <div className="h-10 bg-muted rounded-lg"></div>
        <div className="flex-grow space-y-2 mt-4">
          <div className="h-8 bg-muted rounded-lg"></div>
          <div className="h-8 bg-muted rounded-lg"></div>
          <div className="h-8 bg-muted rounded-lg w-2/3"></div>
        </div>
        <div className="mt-auto h-12 bg-muted rounded-lg"></div>
      </div>
      {/* Chat Window Skeleton */}
      <div className="flex flex-col w-full">
        {/* Header Skeleton */}
        <div className="h-16 bg-background shadow-sm flex items-center p-4">
           <div className="h-6 w-1/3 bg-muted rounded-lg"></div>
        </div>
        {/* Messages Skeleton */}
        <div className="flex-grow p-6 space-y-4">
            <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-muted"></div>
                <div className="h-16 w-1/2 bg-muted rounded-lg"></div>
            </div>
            <div className="flex items-start justify-end space-x-4">
                <div className="h-12 w-1/3 bg-muted rounded-lg"></div>
                <div className="w-8 h-8 rounded-full bg-muted"></div>
            </div>
        </div>
        {/* Input Skeleton */}
        <div className="p-4 bg-background">
            <div className="h-20 max-w-2xl mx-auto bg-muted rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
