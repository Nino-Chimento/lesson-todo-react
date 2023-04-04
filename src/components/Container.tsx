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
  const theme = useContext(ThemeContext);
  const { size } = useResize();
  if (size.width > 1000) {
    console.log('minore');
  } else {
    console.log('maggiore');
  }
  console.log(size);

  return <div className="container">{children}</div>;
};
