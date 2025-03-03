// components/LadybugText.tsx
import React from 'react';
import styles from './LadybugText.module.css';

interface LadybugTextProps {
    text: string;
    className?: string;
}

const LadybugText: React.FC<LadybugTextProps> = ({ text, className = '' }) => {
    return (
        <div className={`${styles.ladybugTextContainer} ${className}`}>
            <div className={styles.grassBackground}>
                <div className={styles.grass}></div>
            </div>

            <h1 className={styles.supportText}>{text}</h1>

            <div className={styles.ladybugContainer}>
                {/* Ladybug 1 */}
                <svg className={styles.ladybug1} viewBox="0 0 100 80" width="40" height="32">
                    <ellipse cx="50" cy="40" rx="30" ry="25" fill="#E53935" />
                    <circle cx="50" cy="40" r="10" fill="#000" />
                    <circle cx="35" cy="30" r="5" fill="#000" />
                    <circle cx="65" cy="30" r="5" fill="#000" />
                    <circle cx="35" cy="50" r="5" fill="#000" />
                    <circle cx="65" cy="50" r="5" fill="#000" />
                    <path d="M50,40 L50,10" stroke="#000" strokeWidth="2" />
                    <path d="M43,10 C45,5 55,5 57,10" fill="#000" />
                    <path d="M40,15 L30,5" stroke="#000" strokeWidth="2" />
                    <path d="M60,15 L70,5" stroke="#000" strokeWidth="2" />
                </svg>

                {/* Question Mark 1 */}
                <svg className={styles.question1} viewBox="0 0 50 80" width="25" height="40">
                    <text x="10" y="60" fontFamily="Arial" fontSize="60" fontWeight="bold" fill="#E53935">?</text>
                </svg>

                {/* Ladybug 2 */}
                <svg className={styles.ladybug2} viewBox="0 0 100 80" width="30" height="24">
                    <ellipse cx="50" cy="40" rx="30" ry="25" fill="#E53935" />
                    <circle cx="50" cy="40" r="10" fill="#000" />
                    <circle cx="35" cy="30" r="5" fill="#000" />
                    <circle cx="65" cy="30" r="5" fill="#000" />
                    <circle cx="35" cy="50" r="5" fill="#000" />
                    <circle cx="65" cy="50" r="5" fill="#000" />
                    <path d="M50,40 L50,10" stroke="#000" strokeWidth="2" />
                    <path d="M43,10 C45,5 55,5 57,10" fill="#000" />
                    <path d="M40,15 L30,5" stroke="#000" strokeWidth="2" />
                    <path d="M60,15 L70,5" stroke="#000" strokeWidth="2" />
                </svg>

                {/* Question Mark 2 */}
                <svg className={styles.question2} viewBox="0 0 50 80" width="20" height="32">
                    <text x="10" y="60" fontFamily="Arial" fontSize="60" fontWeight="bold" fill="#E53935">?</text>
                </svg>

                {/* Ladybug 3 */}
                <svg className={styles.ladybug3} viewBox="0 0 100 80" width="25" height="20">
                    <ellipse cx="50" cy="40" rx="30" ry="25" fill="#E53935" />
                    <circle cx="50" cy="40" r="10" fill="#000" />
                    <circle cx="35" cy="30" r="5" fill="#000" />
                    <circle cx="65" cy="30" r="5" fill="#000" />
                    <circle cx="35" cy="50" r="5" fill="#000" />
                    <circle cx="65" cy="50" r="5" fill="#000" />
                    <path d="M50,40 L50,10" stroke="#000" strokeWidth="2" />
                    <path d="M43,10 C45,5 55,5 57,10" fill="#000" />
                    <path d="M40,15 L30,5" stroke="#000" strokeWidth="2" />
                    <path d="M60,15 L70,5" stroke="#000" strokeWidth="2" />
                </svg>

                {/* Question Mark 3 */}
                <svg className={styles.question3} viewBox="0 0 50 80" width="15" height="24">
                    <text x="10" y="60" fontFamily="Arial" fontSize="60" fontWeight="bold" fill="#E53935">?</text>
                </svg>
            </div>

            {/* Leaf particles */}
            <div className={styles.leaf1}></div>
            <div className={styles.leaf2}></div>
            <div className={styles.leaf3}></div>
            <div className={styles.leaf4}></div>
            <div className={styles.leaf5}></div>
        </div>
    );
};

export default LadybugText;