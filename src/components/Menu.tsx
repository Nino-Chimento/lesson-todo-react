import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const LINK = useMemo(() => [{
    link: "/",
    label: "Home"
  },
  {
    link: "/user",
    label: "user"
  }
  ], []);

  const getLabelCallback = useCallback((label: string) => {
    return label.toUpperCase();
  }, []);

  return (
    <div>
      <h1>{getLabelCallback('myCustomer')}</h1>
      <ul style={{ display: "flex" }}>
        {LINK.map((link) => (
          <Link to={link.link}>{link.label}</Link>
        ))}
      </ul>
    </div>
  );
};
