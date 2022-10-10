import React from 'react';
import { useMenuTriggerState, useOverlayTriggerState } from 'react-stately';
import { useMenuTrigger, OverlayContainer } from 'react-aria';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

import { IDropdown } from './type';
import Button from 'src/pages/components/button/Button';

const Dropdown: IDropdown = (props) => {
  const { isOpen, defaultOpen, onOpenChange, ...rest } = props;

  const overlayProps = { isOpen, defaultOpen, onOpenChange };

  const state = useMenuTriggerState({
    align: 'start',
    trigger: 'press',
    direction: 'bottom',
    ...overlayProps,
    ...rest,
  });
  const ref = React.useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    {
      trigger: rest.trigger,
    },
    state,
    ref,
  );

  return (
    <React.Fragment>
      <Button
        {...menuTriggerProps}
        variant="primary"
        ref={ref}
        // onClick={() => state.toggle()}
        icon={<EllipsisHorizontalIcon />}
        onClick={(e) => {
          console.log(e);
          menuTriggerProps.onPressStart?.({
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            target: ref.current!,
            metaKey: e.metaKey,
            type: 'pressstart',
            shiftKey: e.shiftKey,
            pointerType: 'mouse',
          });
        }}
      />
      {state.isOpen && (
        <OverlayContainer>
          <span
            className="relative overflow-hidden cursor-pointer group hover:overflow-visible"
            aria-describedby="tooltip-01"
          >
            top
            <span
              role="tooltip"
              id="tooltip-01"
              className=" absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded bg-slate-700 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-2 before:border-x-8 before:border-t-8 before:border-x-transparent before:border-t-slate-700 before:opacity-0 before:transition-all before:content-[''] block opacity-100 before:visible before:opacity-100"
            >
              {`Thanks for hovering! I'm a top tooltip`}
            </span>
          </span>
        </OverlayContainer>
      )}
    </React.Fragment>
  );
};

Dropdown.Menu = () => {
  return <ul></ul>;
};
Dropdown.Menu.displayName = 'DropdownMenu';

Dropdown.Item = () => {
  return <li></li>;
};
Dropdown.Item.displayName = 'DropdownItem';

export default Dropdown;
