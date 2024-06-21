import React, { useState, useEffect } from 'react';


interface DynamicBlockProps {
  delay: number;
  content: string;
}

const DynamicBlock: React.FC<DynamicBlockProps> = ({ delay, content }) => {
  const [isLoading, setLoading] = useState(true);
  const [isAnimated, setAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  const handleAnimation = () => {
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 1000);
  };

  return (
    <div
      className={`dynamic-block ${isLoading ? 'loading' : ''} ${isAnimated ? 'animate' : ''}`}
      onClick={handleAnimation}
    >
      <h3>Dynamic Block</h3>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="block-content">
            <p>{content}</p>
          </div>
          <div className="button-container">
            <button className="button" onClick={handleAnimation}>
              Animate
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DynamicBlock;
