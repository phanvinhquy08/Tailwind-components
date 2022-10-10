import React from 'react';
import { NextPage } from 'next';

import Flex from './Flex';

const FlexPage: NextPage = () => {
  return (
    <div>
      <Flex gap={'gap-x-1'} />
    </div>
  );
};

export default FlexPage;
