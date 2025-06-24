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
      <title>Zenith Aesthetics</title>
      <path d="M15,5 L45,5 L15,45 L45,45" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" />
      <text x="50" y="35" fontFamily="Rubik, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(var(--foreground))">
        Zenith
      </text>
    </svg>
);
