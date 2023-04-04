import { useCallback, useMemo } from 'react';

export const Menu = () => {
  const LINK = useMemo(() => ['home', 'about', 'contact'], []);

  const getLabelCallback = useCallback((label: string) => {
    return label.toUpperCase();
  }, []);

  return (
    <div>
      <h1>{getLabelCallback('myCustomer')}</h1>
      <ul>
        {LINK.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </div>
  );
};
