import React from 'react';
import { NextPage } from 'next';

import Input from './Input';

const InputPage: NextPage = () => {
  return (
    <div className="container bg-white p-16 mx-auto flex gap-4">
      <div className="flex-1">
        <Input label="Name" type="text" placeholder="Name" size="large" />
        <Input label="Name" type="text" placeholder="Name" size="base" />
        <Input label="Name" type="text" placeholder="Name" size="small" />
      </div>

      <div className="flex-1">
        <Input
          label="Name"
          variant="outline"
          type="text"
          placeholder="Name"
          size="large"
        />
        <Input
          label="Name"
          variant="outline"
          type="text"
          placeholder="Name"
          size="base"
        />
        <Input
          label="Name"
          variant="outline"
          type="text"
          placeholder="Name"
          size="small"
        />
      </div>
    </div>
  );
};

export default InputPage;
