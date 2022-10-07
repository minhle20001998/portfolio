import React from 'react';
import { useRoutes } from 'react-router';
import { AppWrapper } from './App.styled';
import { routesGenerator } from './routes';

function App() {
  const content = useRoutes(routesGenerator());
  return <AppWrapper className="App">{content}</AppWrapper>;
}

export default App;
