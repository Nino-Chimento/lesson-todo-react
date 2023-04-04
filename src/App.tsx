import React, { useEffect, useState } from 'react';

import './App.css';


import { ThemeContext } from './context/ThemeContext';

import { usePosition } from './hooks/usePosition';
import { Container } from './components/Container';
import { UserContext } from './context/UserContext';
import { TodosPage } from './pages/TodosPage';
import { Menu } from './components/Menu';

function App() {
  const [theme, setTheme] = useState('light');
  const { position } = usePosition();
  console.log('position', position);
  return (
    <ThemeContext.Provider value={{ theme }}>
      <Container>
        <UserContext.Provider value={{ name: 'John', lastName: 'Doe' }}>
          <Menu />
          <TodosPage />
        </UserContext.Provider>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
