import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

const initSentry = async (): Promise<void> => {
  const release = await fetch('./release').then(
    (result): Promise<string> => {
      if (!result.ok) return new Promise<string>((): string => 'VERSION-UNKNOWN');
      return result.text();
    }
  );
  const environment = window.CONFIG.sentry_environment || 'dev';

  console.log('Sentry init for version: ', release);
  Sentry.init({ dsn: window.CONFIG.sentry_dsn, release: release, environment: environment });
};

if (window.CONFIG.sentry_dsn) {
  initSentry();
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

declare global {
  interface Window {
    CONFIG: {
      sentry_environment?: string;
      sentry_dsn?: string;
    };
  }
}
