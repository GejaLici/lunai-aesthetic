import type React from 'react';

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  // No specific props needed for now
}

export const LogoIcon: React.FC<LogoIconProps> = (props) => (
  <img
    src="/images/z-logo1.jpg"
    alt="Z logo"
    width={40}
    height={40}
  />
);
