import type React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoIconProps {
  className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className, ...props }) => (
  <Image
    src="/z-logo1.png"
    alt="Lunai Aesthetics Logo"
    width={150}
    height={50}
    className={cn(className)}
    priority
    {...props}
  />
);
