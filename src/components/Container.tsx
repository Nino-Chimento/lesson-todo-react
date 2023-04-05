import { log } from 'console';
import { FC, useContext } from 'react';
import '../App.css';
import { ThemeContext } from '../context/ThemeContext';
import { useResize } from '../hooks/useResize';

interface Props {
  children: React.ReactNode;
  secondProps?: boolean;
}

export const Container: FC<Props> = ({ children, secondProps }) => {

 

  return <div className="container">{children}</div>;
};
