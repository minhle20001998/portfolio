import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomThemeProvider from './contexts/CustomThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { ContentProvider, TranslationProvider } from './contexts';
import './utils/i18next';

// use this function to apply providers instead of nesting them
const Providers = ({
  providers,
  children
}: {
  providers: JSX.Element[];
  children: JSX.Element;
}) => {
  const renderProvider = (providers: JSX.Element[], children: JSX.Element): JSX.Element => {
    const [provider, ...restProviders] = providers;

    if (provider) {
      return React.cloneElement(provider, undefined, renderProvider(restProviders, children));
    }

    return children;
  };

  return renderProvider(providers, children);
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Providers
    providers={[
      <BrowserRouter />,
      <CustomThemeProvider />,
      <ContentProvider />,
      <TranslationProvider />
    ]}
  >
    <App />
  </Providers>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
