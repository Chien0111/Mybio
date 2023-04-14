import { useState, useEffect } from 'react';
import './style.css';

function TypingAnimation({ text }: any) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      const nextChar = text[currentIndex];
      setDisplayText(displayText => displayText + nextChar);
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return <div className="typing-animation">{displayText}</div>;
}

export default TypingAnimation;
