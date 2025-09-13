import { BIDI_RTL_LANGS, RTL_SCRIPTS } from './constants';
import type { Direction, LocaleInfo } from './typings';

const LOCALE_REGEX =
  /^([a-zA-Z]{2,3}|[a-zA-Z]{5,8})([-_][a-zA-Z]{4})?([-_](?:[a-zA-Z]{2}|\d{3}))?([-_](?:[a-zA-Z\d]{5,8}|\d[a-zA-Z\d]{3}))?$/;

function parseLocale(locale: string): LocaleInfo | undefined {
  const matches = LOCALE_REGEX.exec(locale);
  if (!matches || !matches[1]) {
    return undefined;
  }

  const script = matches[2] ? matches[2].substring(1).toLowerCase() : undefined;
  const countryCode = matches[3] ? matches[3].substring(1).toUpperCase() : undefined;

  return {
    lang: matches[1].toLowerCase(),
    script,
    countryCode,
  };
}

/**
 * Checks if a locale is right-to-left.
 * @param locale The locale to check.
 * @returns `true` if the locale is right-to-left, `false` otherwise.
 */
export function isRTL(locale: string): boolean {
  if (typeof (locale as unknown) !== 'string') {
    return false;
  }

  const parsedLocale = parseLocale(locale);
  if (!parsedLocale) {
    return false;
  }

  const { lang, script } = parsedLocale;

  if (script) {
    return RTL_SCRIPTS.has(script);
  }

  return BIDI_RTL_LANGS.has(lang);
}

/**
 * Gets the direction of a locale.
 * @param locale The locale.
 * @returns `'rtl'` if the locale is right-to-left, `'ltr'` otherwise.
 */
export function getDirection(locale: string): Direction {
  return isRTL(locale) ? 'rtl' : 'ltr';
}

export type { Direction, LocaleInfo };
