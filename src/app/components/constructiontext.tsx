// components/ConstructionText.tsx
import React from 'react';
import styles from './ConstructionText.module.css';

interface ConstructionTextProps {
    text: string;
    className?: string;
}

const ConstructionText: React.FC<ConstructionTextProps> = ({ text, className = '' }) => {
    return (
        <div className={`${styles.constructionTextContainer} ${className}`}>
            <div className={styles.constructionBackground}>
                <div className={styles.constructionStripes}></div>
            </div>

            <h1 className={styles.constructionText}>{text}</h1>

            {/* Dust particles */}
            <div className={styles.dust1}></div>
            <div className={styles.dust2}></div>
            <div className={styles.dust3}></div>
            <div className={styles.dust4}></div>
            <div className={styles.dust5}></div>
        </div>
    );
};

export default ConstructionText;