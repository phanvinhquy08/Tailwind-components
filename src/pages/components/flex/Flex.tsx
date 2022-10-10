import React from 'react';
import cls from 'classnames';

import { Size } from 'src/pages/components/configProvider/type';
import { Spacing, SpacingClassName } from 'src/pages/components/flex/type';

type Props = {
  size?: Size;
  itemClassName?: string;
  className?: string;
  gap?: SpacingClassName<'gap'>;
};

const Flex: React.FC<Props> = (props) => {
  const { className, gap } = props;

  return (
    <div className={cls('flex', gap)}>
      <div>item 1</div>
      <div>item 1</div>
    </div>
  );
};

export default Flex;
