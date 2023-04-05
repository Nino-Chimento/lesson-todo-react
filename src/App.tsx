import React, { useEffect, useState } from 'react';

import './App.css';


import { ThemeContext } from './context/ThemeContext';

import { usePosition } from './hooks/usePosition';
import { Container } from './components/Container';
import { UserContext } from './context/UserContext';
import { TodosPage } from './pages/TodosPage';
import { Menu } from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

function App() {
  const [theme, setTheme] = useState('light');
  const { position } = usePosition();
 

  return (
    <ThemeContext.Provider value={{ theme }}>
      <UserContext.Provider value={{ name: 'John', lastName: 'Doe' }}>
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
