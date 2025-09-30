import React from 'react';

const CategorySkeleton = () => {
  return (
    <div className="flex flex-col items-center space-y-1 flex-shrink-0 text-center w-16">
      <div className="w-14 h-14 rounded-full bg-gray-200 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded w-12 mt-2 animate-pulse"></div>
    </div>
  );
};

export default CategorySkeleton;