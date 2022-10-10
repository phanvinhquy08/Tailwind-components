import React, { ButtonHTMLAttributes, MutableRefObject } from 'react';
import { OverlayTriggerProps, OverlayTriggerState } from 'react-stately';
import { AriaOverlayProps, AriaPositionProps } from 'react-aria';
import { AriaDialogProps } from '@react-types/dialog';

export interface BasePopoverProps {
  triggerElement:
    | React.ReactNode
    | ((
        state: OverlayTriggerState,
        triggerRef: MutableRefObject<any>,
        triggerAttribute: ButtonHTMLAttributes<any>,
      ) => React.ReactNode);

  children: React.ReactNode | ((state: OverlayTriggerState) => React.ReactNode);
  arrow: boolean;
  overlayClassName: string;
  title: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  destroyOnClose: boolean;
}

export interface PopoverProps
  extends OverlayTriggerProps,
    AriaOverlayProps,
    AriaPositionProps,
    BasePopoverProps,
    AriaDialogProps {}

export type PopoverHeaderProps = {
  className?: string;
  closeIcon?: React.ReactNode | null | boolean;
  title?: string;
};

export type PopoverContentProps = {
  className?: string;
};

export type PopoverFooterProps = {
  className?: string;
};

export interface IPopover {
  (props: Partial<PopoverProps>): React.ReactElement;
  Header: React.FC<React.PropsWithChildren<PopoverHeaderProps>>;
  Content: React.FC<React.PropsWithChildren<PopoverContentProps>>;
  Footer: React.FC<React.PropsWithChildren<PopoverFooterProps>>;
}
