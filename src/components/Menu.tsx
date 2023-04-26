import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';
import { Select } from './Select';
import Button from './Button';

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
  const [user, setUser] = useState<number | string | undefined>()
  return (
    <div>
      <h1>{getLabelCallback('myCustomer')}</h1>
      <ul style={{ display: "flex" }}>
        {LINK.map((link) => (
          <Link to={link.link}>{link.label}</Link>
        ))}
      </ul>
      <Select handleChange={(value) => setUser(value)} options={[{ label: "marco", value: 1 }, { label: "giuseppe", value: 2 }]} />
      <Button onClick={() => console.log(user)}>Click</Button>

    </div>
  );
};
