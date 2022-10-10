import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ToggleDarkMode: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <DarkModeSwitch
      onChange={() => {
        document.documentElement.classList.toggle('dark');
        setDark((d) => !d);
      }}
      checked={dark}
    />
  );
};

export default ToggleDarkMode;
