// components/ui/skeleton.tsx

import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded-md ${className}`} />
  );
};
