
import type React from 'react';
import { cn } from '@/lib/utils';

interface LogoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // No specific props needed for now
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className, ...props }) => (
  <img
    src="/images/z-logo1.jpg"
    alt="Lunai Aesthetics Logo"
    width={150}
    height={50}
    className={cn(className)} 
    {...props} 
  />
);
