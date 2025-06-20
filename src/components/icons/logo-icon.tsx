
import type React from 'react';
import { cn } from '@/lib/utils';

interface LogoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // No specific props needed for now
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className, ...props }) => (
  <img
    src="/images/lunai-logo.png"
    alt="Lunai Aesthetics Logo"
    width={40}
    height={40}
    className={cn(className)} // Apply className using cn utility
    {...props} // Spread other props
  />
);
