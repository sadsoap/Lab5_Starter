// sum.test.js

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

import { sum } from '../code-to-unit-test/sum';
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Valid phone number returns true', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('Valid phone number returns true', () => {
    expect(functions.isPhoneNumber('(111)110-2222')).toBe(true);
});