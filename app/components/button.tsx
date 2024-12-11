// components/ui/button.tsx

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'glass';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium transition-colors duration-200',
        variant === 'glass'
          ? 'bg-blue-500 bg-opacity-50 backdrop-filter backdrop-blur-lg hover:bg-opacity-70'
          : 'bg-gray-800 text-white hover:bg-gray-700'
      )}
      {...props}
    />
  );
};
