export type Size = 'small' | 'base' | 'large';
export type Screen = 'sm' | 'lg' | 'md';

export interface ConfigProvider {
  size?: Size;
  borderRadius?: Screen;
  shadow?: Screen;
}
