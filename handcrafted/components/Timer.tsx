'use client';

import { useEffect, useState } from 'react';

const Timer = () => {
  const initialTimeInSeconds = 288000;

  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center mt-6 text-xl font-semibold">
        <h1 className="text-2xl font-bold">Welcome to Handcrafted Haven</h1>
      {timeLeft > 0 ? (
        <p>🚀 Launch starts in: {formatTime(timeLeft)}</p>
      ) : (
        <p>🎉 It's launch time! Welcome to the future!</p>
      )}
    </div>
  );
};

export default Timer;
