import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Button = ({ children, onClick }) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
