
"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function PageProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // When the path changes, a navigation has just completed.
    // We start the animation now to give feedback that the new page has loaded.
    setIsAnimating(true);
    
    // Reset the animation after it has finished.
    // The duration should be longer than the CSS transition.
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);
  
  return (
    <div
      className={cn(
        'fixed top-0 left-0 h-1 z-50 bg-primary/80 backdrop-blur-3xl',
        'transition-all duration-700 ease-in-out',
        isAnimating ? 'w-full' : 'w-0',
        isAnimating ? 'opacity-100' : 'opacity-0 transition-opacity delay-700 duration-300'
      )}
    />
  );
}
