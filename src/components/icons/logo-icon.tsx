import type React from 'react';

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  // No specific props needed for now
}

export const LogoIcon: React.FC<LogoIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor" // Controlled by CSS e.g. text-accent
    strokeWidth="6" // Bolder lines
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Stylized Z as mountain peaks */}
    <path d="M20 75 L50 25 L80 75" /> {/* Main peak (like A) */}
    <path d="M15 75 L85 75" /> {/* Base of Z */}
    <path d="M15 25 L85 25" /> {/* Top of Z */}
  </svg>
);
