import React from 'react';
import { MenuTriggerProps } from '@react-types/menu';

export type Option<T = any> = {
  label?: string;
  value?: T;
};

export interface BaseDropdownProps extends MenuTriggerProps {
  triggerElement?: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
}

export type DropdownProps = BaseDropdownProps;
export type MenuProps = {};
export type ItemProps = {};

export interface IDropdown {
  (props: DropdownProps): React.ReactElement;
  Menu: React.FC<MenuProps>;
  Item: React.FC<ItemProps>;
}
