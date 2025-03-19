import React, { useEffect, useState } from 'react';

const PasswordScrambleAnimation = () => {
  const originalText = 'Keyperisthebest';
  const [displayText, setDisplayText] = useState(
    originalText.split('').map(() => '*')
  );
  const scrambleSpeed = 150; // Speed of scrambling per character
  const finalSettleDelay = 1200; // Delay before setting the final letter

  // Function to generate a random character
  const getRandomChar = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    return characters[Math.floor(Math.random() * characters.length)];
  };

  // Function to start the scrambling animation
  const scrambleText = () => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex >= originalText.length) {
        clearInterval(interval);
        return;
      }

      setDisplayText((prevText) =>
        prevText.map((char, index) =>
          index < currentIndex ? originalText[index] : getRandomChar()
        )
      );

      // Settle each letter after scrambling
      setTimeout(() => {
        setDisplayText((prevText) =>
          prevText.map((char, index) =>
            index === currentIndex ? originalText[index] : char
          )
        );
        currentIndex++;
      }, finalSettleDelay);
    }, scrambleSpeed);
  };

  useEffect(() => {
    setTimeout(scrambleText, 500);
  }, []);

  return (
    <div className="password-container">
      {displayText.map((char, index) => (
        <span key={index} className="scramble-char">
          {char}
        </span>
      ))}
    </div>
  );
};

export default PasswordScrambleAnimation;
