// unit.test.js

import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
} from '../code-to-unit-test/unit-test-me';

//phone number
test('Valid phone number returns true', () => {
    expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('Valid phone number returns true', () => {
    expect(isPhoneNumber('(111)110-2222')).toBe(true);
});

test('Invalid phone number returns false', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Invalid phone number returns false', () => {
    expect(isPhoneNumber('(111)1102222')).toBe(false);
});

//email
test('Valid email returns true', () => {
    expect(isEmail('lindsey@gmail.com')).toBe(true);
});

test('Valid email returns true', () => {
    expect(isEmail('jufdrsuy123@hotmail.com')).toBe(true);
});

test('Invalid email returns false', () => {
    expect(isEmail('linz@gmail')).toBe(false);
});

test('Invalid email returns false', () => {
    expect(isEmail('@gmail.com')).toBe(false);
});