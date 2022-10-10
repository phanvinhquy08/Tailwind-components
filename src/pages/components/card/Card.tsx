import React from 'react';
import cls from 'classnames';

import { Card as CardInterface } from './type';

const Card: CardInterface = ({ children, classNames, horizontal }) => {
  return (
    <div
      className={cls(
        'overflow-hidden rounded shadow-md text-slate-500 shadow-slate-200 relative flex',
        'bg-white',
        classNames,
        {
          'flex-col': !horizontal,
        },
      )}
    >
      {children}
    </div>
  );
};

Card.Body = ({ classNames, children }) => {
  return <div className={cls('p-6', classNames)}>{children}</div>;
};

Card.Header = ({ classNames, children, extra }) => {
  return (
    <div
      className={cls(
        'p-6 flex items-center flex-x-4 justify-between',
        classNames,
      )}
    >
      <header>{children}</header>
      {extra}
    </div>
  );
};

Card.Image = ({ classNames, src, alt }) => {
  return (
    <figure className={cls(classNames)}>
      <img src={src} alt={alt || 'card_image'} className="aspect-video" />
    </figure>
  );
};

Card.Footer = ({ classNames, children }) => {
  return (
    <div
      className={cls(
        'p-6 pt-0 flex items-center gap-4 justify-end',
        classNames,
      )}
    >
      <footer>{children}</footer>
    </div>
  );
};

Card.Body.displayName = 'CardBody';
Card.Header.displayName = 'CardHeader';
Card.Image.displayName = 'CardImage';
Card.Footer.displayName = 'CardFooter';

export default Card;
