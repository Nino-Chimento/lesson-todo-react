import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Color } from './Avatar';

type ButtonProps = {
  children: string |React.ReactNode;
  onClick: () => void;
  color?: Color.Red | Color.Blue;
}

const Button = ({ children, onClick }:ButtonProps) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
