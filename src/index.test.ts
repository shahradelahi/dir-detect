import { describe, expect, test } from 'vitest';

import { getDirection, isRTL } from './index';

describe('isRTL', () => {
  test('should return false for invalid input', () => {
    // @ts-expect-error testing invalid input
    expect(isRTL()).toBe(false);
    // @ts-expect-error testing invalid input
    expect(isRTL(null)).toBe(false);
    expect(isRTL('')).toBe(false);
    expect(isRTL(' ')).toBe(false);
    expect(isRTL('1234')).toBe(false);
  });

  test('should return false for LTR locales', () => {
    expect(isRTL('en')).toBe(false);
    expect(isRTL('EN')).toBe(false);
    expect(isRTL('en-US')).toBe(false);
    expect(isRTL('en_US')).toBe(false);
    expect(isRTL('en-us')).toBe(false);
  });

  test('should return true for RTL locales', () => {
    expect(isRTL('ar')).toBe(true);
    expect(isRTL('AR')).toBe(true);
    expect(isRTL('ar-jo')).toBe(true);
    expect(isRTL('ar-JO')).toBe(true);
    expect(isRTL('ar_JO')).toBe(true);
    expect(isRTL('fa')).toBe(true);
    expect(isRTL('he')).toBe(true);
    expect(isRTL('ur')).toBe(true);
    expect(isRTL('yi')).toBe(true);
  });
});

describe('getDirection', () => {
  test('should return "ltr" for invalid input', () => {
    // @ts-expect-error testing invalid input
    expect(getDirection()).toBe('ltr');
    // @ts-expect-error testing invalid input
    expect(getDirection(null)).toBe('ltr');
    expect(getDirection('')).toBe('ltr');
    expect(getDirection(' ')).toBe('ltr');
    expect(getDirection('1234')).toBe('ltr');
  });

  test('should return "ltr" for LTR locales', () => {
    expect(getDirection('en')).toBe('ltr');
    expect(getDirection('EN')).toBe('ltr');
    expect(getDirection('en-US')).toBe('ltr');
    expect(getDirection('en_US')).toBe('ltr');
    expect(getDirection('en-us')).toBe('ltr');
  });

  test('should return "rtl" for RTL locales', () => {
    expect(getDirection('ar')).toBe('rtl');
    expect(getDirection('AR')).toBe('rtl');
    expect(getDirection('ar-jo')).toBe('rtl');
    expect(getDirection('ar-JO')).toBe('rtl');
    expect(getDirection('ar_JO')).toBe('rtl');
    expect(getDirection('fa')).toBe('rtl');
    expect(getDirection('he')).toBe('rtl');
    expect(getDirection('ur')).toBe('rtl');
    expect(getDirection('yi')).toBe('rtl');
  });
});
