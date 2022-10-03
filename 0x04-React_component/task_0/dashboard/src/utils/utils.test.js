// import React from 'react';
import '@testing-library/jest-dom';
import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe("getFooterCopy tests", function() {
  it("with true as argument", function() {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('with false as argument', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getFullYear tests', () => {
  it('check if return the current year', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
});

describe('getLatestNotification tests', () => {
  it('expected correct string', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
