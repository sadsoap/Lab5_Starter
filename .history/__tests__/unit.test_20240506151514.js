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

//password
test('Strong password returns true', () => {
    expect(isStrongPassword('Pass123_')).toBe(true);
});

test('Strong password returns true', () => {
    expect(isStrongPassword('PassTest22_87t')).toBe(true);
});

test('Weak password returns false', () => {
    expect(isStrongPassword('no')).toBe(false);
});

test('Weak password returns false', () => {
    expect(isStrongPassword('L123Fail_!')).toBe(false);
});

//date
test('Valid date returns true', () => {
    expect(isDate('12/1/2024')).toBe(true);
});

test('Valid date returns true', () => {
    expect(isDate('1/10/2050')).toBe(true);
});

test('Invalid date returns false', () => {
    expect(isDate('12/11/10')).toBe(false);
});

test('Invalid date returns false', () => {
    expect(isDate('12-12-2012')).toBe(false);
});

//hex color
test('Valid hex color returns true', () => {
    expect(isHexColor('#ff0000')).toBe(true);
});

test('Valid hex color returns true', () => {
    expect(isHexColor('#f00')).toBe(true);
});

test('Invalid hex color returns false', () => {
    expect(isHexColor('blue')).toBe(false);
});

test('Invalid hex color returns false', () => {
    expect(isHexColor('#00000000')).toBe(false);
});