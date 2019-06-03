import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import classNames from 'classnames';

const App = (): React.ReactElement => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={classNames({
            'App-logo': true,
            'App-logo-animation': isSpinning,
          })}
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(): void => setIsSpinning(!isSpinning)}>
          {isSpinning ? 'Stop Spinner' : 'Start Spinner'}
        </button>
      </header>
    </div>
  );
};

export default App;
