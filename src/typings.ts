/**
 * Represents the direction of a locale.
 */
export type Direction = 'ltr' | 'rtl';

/**
 * Represents information about a parsed locale.
 */
export interface LocaleInfo {
  lang: string;
  script?: string;
  countryCode?: string;
}
