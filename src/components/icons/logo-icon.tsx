import type React from 'react';
import { cn } from '@/lib/utils';

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className, ...props }) => (
    <svg
      role="img"
      viewBox="0 0 160 50"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <title>Lunai Aesthetics</title>
      <path d="M20,5 L20,45 L40,45" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" />
      <text x="50" y="35" fontFamily="Rubik, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(var(--foreground))">
        Lunai
      </text>
    </svg>
);
