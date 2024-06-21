import React, { Suspense, lazy } from 'react';
import reactLogo from './assets/react.svg';

const ComponentList = lazy(() => import('./components/ComponentList')); // Изменено на ComponentList

const App: React.FC = () => {
  return (
    <>
      <div className="header">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">Vite + React</h1>

      <div className="main-content">
        <div className="constant-block">
          <h2>Constant Block 1</h2>
          <p>Content of Constant Block 1</p>
        </div>

        <div className="constant-block">
          <h2>Constant Block 2</h2>
          <p>Content of Constant Block 2</p>
        </div>

        <Suspense fallback={<p>Loading dynamic content...</p>}>
          <ComponentList />
        </Suspense>
      </div>
    </>
  );
};

export default App;
