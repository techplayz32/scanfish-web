// components/EnhancedFishText.tsx
import React from 'react';
import styles from './FishText.module.css';

interface FishTextProps {
  text: string;
  className?: string;
}

const EnhancedFishText: React.FC<FishTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`${styles.fishTextContainer} ${className}`}>
      <div className={styles.waterBackground}>
        <div className={styles.water}></div>
      </div>
      
      <h1 className={styles.fishText}>{text}</h1>
      
      <div className={styles.fishContainer}>
        <svg className={styles.fish1} viewBox="0 0 100 50" width="40" height="20">
          <path d="M10,25 C20,15 40,5 70,10 C85,15 95,25 95,25 C95,25 85,35 70,40 C40,45 20,35 10,25 Z" fill="#FF6D6A" />
          <path d="M15,25 C15,25 30,15 40,25 C30,35 15,25 15,25 Z" fill="#FF4F4D" />
          <circle cx="75" cy="25" r="3" fill="#333" />
          <path d="M85,25 L95,30 L95,20 Z" fill="#FF4F4D" />
        </svg>
        
        <svg className={styles.fish2} viewBox="0 0 100 50" width="30" height="15">
          <path d="M10,25 C20,15 40,5 70,10 C85,15 95,25 95,25 C95,25 85,35 70,40 C40,45 20,35 10,25 Z" fill="#6DCEFF" />
          <path d="M15,25 C15,25 30,15 40,25 C30,35 15,25 15,25 Z" fill="#4FB8FF" />
          <circle cx="75" cy="25" r="3" fill="#333" />
          <path d="M85,25 L95,30 L95,20 Z" fill="#4FB8FF" />
        </svg>
        
        <svg className={styles.fish3} viewBox="0 0 100 50" width="25" height="12">
          <path d="M10,25 C20,15 40,5 70,10 C85,15 95,25 95,25 C95,25 85,35 70,40 C40,45 20,35 10,25 Z" fill="#FFD86D" />
          <path d="M15,25 C15,25 30,15 40,25 C30,35 15,25 15,25 Z" fill="#FFCA4F" />
          <circle cx="75" cy="25" r="3" fill="#333" />
          <path d="M85,25 L95,30 L95,20 Z" fill="#FFCA4F" />
        </svg>
      </div>
      
      {/* Bubbles */}
      <div className={styles.bubble1}></div>
      <div className={styles.bubble2}></div>
      <div className={styles.bubble3}></div>
      <div className={styles.bubble4}></div>
      <div className={styles.bubble5}></div>
    </div>
  );
};

export default EnhancedFishText;