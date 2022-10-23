import React from 'react';

import { Size } from 'src/pages/components/configProvider/type';

export type BaseInputProps = {
  size?: Size;
  wrapperCls?: string;
  labelCls?: string;
  icon?: React.ReactNode;
  variant?: 'outline' | 'basic';
  label?: React.ReactNode;
  helper?: React.ReactNode;
  peer?: boolean;
  status?: 'danger' | 'warning' | 'info';
  loading?: boolean;
};

export type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> &
  BaseInputProps;

export type InputGroupProps = {};

export interface IInput
  extends React.ForwardRefRenderFunction<HTMLInputElement, InputProps> {
  Group: React.FC<InputGroupProps>;
}
