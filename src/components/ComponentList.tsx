import React, { Suspense } from 'react';
import DynamicBlock from './DynamicBlock'; 

const ComponentList: React.FC = () => {
  return (
    <>
      <h2>Dynamic Blocks</h2>
      <div className="block-list">
        {[1, 2, 3, 4, 5].map((num) => (
          <Suspense key={num} fallback={<p>Loading block {num}...</p>}>
            <DynamicBlock delay={num * 500} content={`Content of Block ${num}`} />
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default ComponentList;