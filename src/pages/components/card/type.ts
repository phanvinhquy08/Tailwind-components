import React, { PropsWithChildren } from 'react';

export type CardImageProps = {
  classNames?: string;
  src?: string;
  alt?: string;
};
export type CardProps = {
  classNames?: string;
  horizontal?: boolean;
} & CardContextProps;
export type CardHeaderProps = { classNames?: string; extra?: React.ReactNode };
export type CardBodyProps = { classNames?: string };
export type CardFooterProps = { classNames?: string };
export type CardContextProps = {
  headerProps?: CardHeaderProps;
  bodyProps?: CardBodyProps;
  footerProps?: CardFooterProps;
  imageProps?: CardImageProps;
};

export interface Card {
  (props: PropsWithChildren<CardProps>): React.ReactElement;
  Header: React.FC<CardHeaderProps>;
  Image: React.FC<CardImageProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
}

export const CardContext = React.createContext<CardContextProps>({
  bodyProps: {},
  footerProps: {},
  imageProps: {},
  headerProps: {},
});

export const useCardContext = () => React.useContext(CardContext);
