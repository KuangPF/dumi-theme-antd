import React from 'react';
import type { ThemeName } from '../../common/ThemeSwitch';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: ThemeName[];
}

const MacOSIcon: React.FC<IconProps> = (props) => {
  const { className, style, theme } = props;
  const isDarkMode = (theme ?? []).indexOf('dark') > -1;
  return (
    <svg
      className={className}
      style={style}
      fill={isDarkMode ? '#ffffff' : '#000000'}
      focusable="false"
      height="1em"
      stroke={isDarkMode ? '#ffffff' : '#000000'}
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      width="1em"
    >
      <path d="M928.768 750.592c-1.536 4.096-21.504 74.24-70.656 145.92-43.008 62.464-87.04 124.928-156.672 125.952-68.608 1.024-90.624-40.96-168.96-40.96s-102.912 39.936-167.936 41.984c-67.072 2.56-118.784-68.096-161.792-130.048C115.2 767.488 47.616 534.528 138.24 378.88c44.544-77.824 124.928-127.488 211.968-129.024 65.536-1.024 128.512 44.544 168.448 44.544 40.96 0 116.736-55.296 196.608-47.104 33.28 1.536 126.976 13.824 186.88 101.376-4.608 3.072-111.616 66.56-110.592 195.072 1.024 155.136 135.68 206.336 137.216 206.848m-266.24-586.24c35.84-44.032 59.904-104.448 53.248-164.352-51.2 2.048-114.176 34.304-151.04 77.824-32.768 37.888-61.952 99.328-53.76 158.72 56.832 3.072 115.712-30.208 151.552-72.192" />
    </svg>
  );
};

export default MacOSIcon;
