import React from 'react';
import { NextPage } from 'next';
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/24/solid';

import Popover from 'src/pages/components/popover/Popover';
import Button from 'src/pages/components/button/Button';
import { ToggleDarkMode } from 'src/components';

const PopoverPage: NextPage = () => {
  const targetRef = React.useRef<any>(null);
  const [open, setOpen] = React.useState(false);

  return (
    <div className=" h-screen p-24 flex justify-center items-center">
      <Button onClick={() => setOpen(!open)}>Controllable</Button>
      <ToggleDarkMode />

      <Popover
        triggerElement={
          <Button
            variant={open ? 'primary' : 'default'}
            icon={open ? <ArrowDownCircleIcon /> : <ArrowUpCircleIcon />}
          />
        }
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <Popover.Header className="font-bold">
          Hi, this is title!
        </Popover.Header>
        <Popover.Content>Controllable popover</Popover.Content>
        <Popover.Footer>Hi, this is footer!</Popover.Footer>
      </Popover>

      <Popover
        triggerElement={(state, ref, props) => (
          <Button
            ref={ref}
            variant={state.isOpen ? 'primary' : 'default'}
            icon={
              state.isOpen ? <ArrowDownCircleIcon /> : <ArrowUpCircleIcon />
            }
            {...props}
          >
            Uncontrollable
          </Button>
        )}
        title="Hi, this is title text"
        content="Uncontrollable popover"
        footer="This is footer"
      />

      <span className="dark:text-white">
        Custom target{' '}
        <a
          className="text-primary"
          href=""
          ref={(r) => (targetRef.current = r)}
        >
          here
        </a>
      </span>
      <Popover
        placement="top start"
        isOpen={open}
        targetRef={targetRef}
        content="Custom target"
      />
    </div>
  );
};

export default PopoverPage;
