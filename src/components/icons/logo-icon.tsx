
import type React from 'react';
import { cn } from '@/lib/utils';

interface LogoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // No specific props needed for now
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className, ...props }) => (
  <img
    src="/images/z-logo1.jpg"
    alt="Z logo"
    width={40}
    height={40}
    className={cn(className)} // Apply className using cn utility
    {...props} // Spread other props
  />
);
