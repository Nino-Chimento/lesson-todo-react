import { createContext } from 'react';

interface ThemeContextProps {
  theme: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
});
