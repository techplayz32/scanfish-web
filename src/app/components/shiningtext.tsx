// components/ShiningText.tsx
import React from 'react';
import styles from './ShiningText.module.css';

interface ShiningTextProps {
  text: string;
  className?: string;
}

const ShiningText: React.FC<ShiningTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`${styles.shiningTextContainer} ${className}`}>
      <h1 className={styles.shiningText}>{text}</h1>
    </div>
  );
};

export default ShiningText;