import React, { useState, useEffect, useCallback } from 'react';

interface TypingEffectProps {
    prefix: string;
    wordList: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ prefix, wordList }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [shouldUpdateIndex, setShouldUpdateIndex] = useState(false);

  const incrementWordIndex = useCallback(() => {
    if (shouldUpdateIndex) {
      setWordIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % wordList.length;
        return nextIndex;
      });
      setShouldUpdateIndex(false);
    }
  }, [wordList.length, shouldUpdateIndex]);

  useEffect(() => {
    const currentWord = wordList[wordIndex];
    
    const handleTyping = () => {
      setDisplayText((text) => {
        if (text.length < currentWord.length) {
          return currentWord.slice(0, text.length + 1);
        } else {
          setIsTyping(false);
          return text;
        }
      });
    };

    const handleDeleting = () => {
      setDisplayText((text) => {
        if (text.length > 0) {
          return text.slice(0, -1);
        } else {
          setIsDeleting(false);
          setIsTyping(true);
          setShouldUpdateIndex(true);
          return '';
        }
      });
    };

    let timer: NodeJS.Timeout;
    if (isTyping) {
      timer = setTimeout(handleTyping, 100);
    } else if (isDeleting) {
      timer = setTimeout(handleDeleting, 50);
    } else {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    }

    incrementWordIndex();

    return () => clearTimeout(timer);
  }, [displayText, isTyping, isDeleting, wordIndex, wordList, incrementWordIndex]);

  return (
    <div className="font-mono text-2xl min-h-[36px]">
      {prefix}{' '}
      <span className="inline-block border-b-2 border-pink-600">
        {displayText}
      </span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingEffect;