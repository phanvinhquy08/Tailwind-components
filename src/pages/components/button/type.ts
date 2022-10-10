import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardRefRenderFunction,
} from 'react';

import { Size } from 'src/pages/components/configProvider/type';

export interface DefaultButtonProps {
  block?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  shape?: 'circle' | 'default';
  children?: React.ReactNode;
  size?: Size;
  elevated?: boolean;
  danger?: boolean;
  iconPosition?: 'trail' | 'lead';
}

export interface ButtonProps extends DefaultButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'default';
}

export interface LinkButtonProps extends DefaultButtonProps {
  variant?: 'link';
}

export type AnchorButtonProps = LinkButtonProps &
  React.DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;

export type NormalButtonProps = ButtonProps &
  React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

export type Props = NormalButtonProps | AnchorButtonProps;

export type IButton = ForwardRefRenderFunction<
  HTMLAnchorElement | HTMLButtonElement,
  Props
>;

export type IconProps = Pick<Props, 'size' | 'danger' | 'variant'>;
