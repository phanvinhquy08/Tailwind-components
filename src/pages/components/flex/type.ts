export type Spacing =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px'
  | '0.5'
  | '1.5'
  | '2.5'
  | '3.5';

export type SpacingCustomize = Spacing | (string & Record<never, never>);

export type SpacingClassName<
  T extends string,
  K extends SpacingCustomize = SpacingCustomize,
> = `${T}-${K}` | `${T}-x-${K}` | `${T}-y-${K}`;
