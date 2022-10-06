import React from 'react';
import './App.css';
import { useRoutes } from 'react-router';
import { routesGenerator } from './routes';

function App() {
  const content = useRoutes(routesGenerator());
  return <div className="App">{content}</div>;
}

export default App;
