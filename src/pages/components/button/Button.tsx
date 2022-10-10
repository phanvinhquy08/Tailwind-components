import React, { ForwardedRef, useMemo } from 'react';
import cls from 'classnames';

import { IButton, Props, AnchorButtonProps, IconProps } from './type';

const isLinkButton = (props: Props): props is AnchorButtonProps => {
  return props.variant === 'link';
};

const Button: IButton = (props, ref) => {
  const childWithIcon = useMemo(() => {
    const iconPosition = props.iconPosition || 'lead';
    const renderIcon = props.loading ? (
      <LoadingIcon variant={props.variant} />
    ) : React.isValidElement(props.icon) ? (
      <span className="relative only:-mx-6">
        {React.cloneElement(props.icon, { className: 'w-4 h-4' })}
      </span>
    ) : null;

    return (
      <React.Fragment>
        {iconPosition === 'lead' && renderIcon}
        {props.children && <span>{props.children}</span>}
        {iconPosition === 'trail' && renderIcon}
      </React.Fragment>
    );
  }, [
    props.children,
    props.variant,
    props.icon,
    props.iconPosition,
    props.loading,
  ]);

  if (isLinkButton(props)) {
    const {
      href,
      size = 'base',
      shape,
      target,
      disabled,
      danger,
      ...restLink
    } = props;

    delete restLink.iconPosition;
    delete restLink.loading;
    delete restLink.icon;

    return (
      <a
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        aria-disabled={disabled}
        role="button"
        href={href}
        target={target}
        className={cls(
          'btn',
          'btn-link',
          {
            'btn-large': size === 'large',
            'btn-base': size === 'base',
            'btn-small': size === 'small',
          },
          {
            rounded: shape === 'default',
            'rounded-full': shape === 'circle',
          },
          { danger },
        )}
        {...restLink}
      >
        {childWithIcon}
      </a>
    );
  }

  const {
    variant = 'default',
    shape = 'default',
    block,
    size = 'base',
    danger,
    className,
    elevated = true,
    ...rest
  } = props;

  delete rest.iconPosition;
  delete rest.loading;
  delete rest.icon;

  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={cls(
        // general button classes:
        'btn',
        //  variant
        {
          'btn-primary': variant === 'primary',
          'btn-outline': variant === 'outline',
          'btn-default': variant === 'default',
        },
        { danger },
        // TODO: add config for secondary
        {
          // text
          'text-primary': variant === 'secondary',
          // background
          'bg-secondary': variant === 'secondary',
          // hover:
          'hover:bg-emerald-300 hover:text-emerald-600':
            variant === 'secondary',
          // focus:
          'focus:bg-emerald-400 focus:text-emerald-700':
            variant === 'secondary',
          // disable:
          'disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400':
            variant === 'secondary',
        },
        // size:
        {
          'btn-large': size === 'large',
          'btn-base': size === 'base',
          'btn-small': size === 'small',
        },
        // shape:
        {
          rounded: shape === 'default',
          'rounded-full': shape === 'circle',
        },
        // full width
        {
          'w-full': block,
        },
        // elevated
        {
          'shadow-md': elevated,
          'shadow-sm': elevated && variant === 'outline',
          'shadow-primary-shadow dark:shadow-dark-shadow': elevated,
          'shadow-danger-shadow': elevated && danger,
          'shadow-gray-300': elevated && variant === 'default',
        },
        // override classes
        className,
      )}
      {...rest}
    >
      {childWithIcon}
    </button>
  );
};

const LoadingIcon: React.FC<IconProps> = ({ variant }) => {
  return (
    <span className="relative only:-mx-6">
      <svg
        className={cls('animate-spin h-4 w-4', {
          'text-white': variant === 'primary',
        })}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="graphics-symbol"
        aria-labelledby="title-15 desc-15"
      >
        <title id="title-15">Icon title</title>
        <desc id="desc-15">A more detailed description of the icon</desc>
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
  );
};

export default React.forwardRef(Button);
