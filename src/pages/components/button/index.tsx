import React from 'react';
import { NextPage } from 'next';

import {
  BeakerIcon,
  ArrowDownIcon,
  CalendarDaysIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';

import Button from './Button';

const ButtonPage: NextPage = () => {
  return (
    <div className="container p-12 space-x-2">
      <Button variant="default" icon={<BeakerIcon />}>
        Normal
      </Button>
      <Button variant="primary" icon={<TrashIcon />}>
        Primary
      </Button>
      <Button variant="outline" icon={<CalendarDaysIcon />}>
        Outline
      </Button>
      <Button variant="link" icon={<ArrowDownIcon />}>
        Download
      </Button>
    </div>
  );
};

export default ButtonPage;
