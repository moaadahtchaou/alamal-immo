import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
  }
  
const Button = ({ children, className = '', ...props }: ButtonProps) => (
    <button 
      className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 ${className}`} 
      {...props}
    >
      {children}
    </button>
  );

export default Button;