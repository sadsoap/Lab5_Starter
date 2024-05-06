// unit.test.js

import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
} from '../code-to-unit-test/unit-test-me';



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