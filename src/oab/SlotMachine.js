import React, { useState } from 'react';
import Reel from './Reel';
import Button from './Button';
import Result from './Result';

const symbols = ['🍒', '🍋', '🍉', '⭐', '🍇'];

const SlotMachine = () => {
  const [reels, setReels] = useState(['🍒', '🍒', '🍒']);
  const [result, setResult] = useState('');

  const spinReels = () => {
    const newReels = reels.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    setReels(newReels);
    checkResult(newReels);
  };

  const checkResult = (newReels) => {
    if (newReels.every(symbol => symbol === newReels[0])) {
      setResult('Jackpot! 🎉');
    } else {
      setResult('Try again!');
    }
  };

  return (
    <div>
      <div className="slot-machine">
        {reels.map((reel, index) => (
          <Reel key={index} symbol={reel} />
        ))}
      </div>
      <Button onClick={spinReels} />
      <Result result={result} />
    </div>
  );
};

export default SlotMachine;
