import React from 'react';
import cls from 'classnames';
import { useId } from 'react-aria';

import { IInput } from './type';

const Input: IInput = (props, ref) => {
  const id = useId(props.id);

  const {
    className,
    size = 'base',
    labelCls,
    wrapperCls,
    variant = 'basic',
    peer,
    label,
    icon,
    loading,
    ...rest
  } = props;

  return (
    <div className={cls('input-wrapper', wrapperCls)}>
      <input
        {...rest}
        id={id}
        ref={ref}
        className={cls(
          'input peer',
          {
            'input-large': size === 'large',
            'input-base': size === 'base',
            'input-small': size === 'small',
          },
          // label move up
          {
            'input-peer': !!peer,
          },
          // variant
          {
            'input-basic': variant === 'basic',
            'input-outline': variant === 'outline',
          },
          className,
        )}
      />

      {/* Label */}
      <label
        htmlFor={id}
        className={cls(
          'input-label',
          // label move up
          {
            'input-placeholder-peer': !!peer,
            'input-placeholder-peer-large': !!peer && size === 'large',
            'input-placeholder-peer-base': !!peer && size === 'base',
            'input-placeholder-peer-small': !!peer && size === 'small',
          },
          labelCls,
        )}
      >
        {label}
      </label>

      {/* Helper */}
      <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
        <span>Text field with helper text</span>
        <span className="text-slate-500">1/10</span>
      </small>
    </div>
  );
};

Input.Group = () => null;
Input.Group.displayName = 'InputGroup';

export default React.forwardRef(Input);
