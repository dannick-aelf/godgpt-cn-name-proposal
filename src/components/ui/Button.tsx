import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#5755EE] focus:ring-offset-2 focus:ring-offset-[#212121] disabled:opacity-40 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#5755EE] text-white rounded-lg px-4 py-[14px] min-h-[48px] hover:bg-[#4B49DC] active:bg-[#413FC8] active:scale-[0.98]',
    secondary: 'bg-white text-[#171717] rounded-lg px-4 py-[14px] min-h-[48px] hover:bg-[#f5f5f5] active:bg-[#e8e8e8] active:scale-[0.98]',
    text: 'bg-transparent text-[#9b9b9b] rounded-none px-2 py-2 min-h-[36px] hover:text-[#ececec] active:opacity-80',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
