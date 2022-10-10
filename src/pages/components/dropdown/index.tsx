import React from 'react';
import { NextPage } from 'next';

import Dropdown from './Dropdown';

const DropdownPage: NextPage = () => {
  return (
    <div className="container p-12">
      <Dropdown />
    </div>
  );
};

export default DropdownPage;
