import { part1 } from './';

const mainTestInput = `368078`;
const testCase1 = `1`;
const testCase2 = `12`;
const testCase3 = `23`;
const testCase4 = `1024`;

describe('Day3 works', () => {
    describe('part1', () => {
        it(testCase1, () => {
            expect(part1(testCase1)).toBe(0);
        });
        it(testCase2, () => {
            expect(part1(testCase2)).toBe(3);
        });
        it(testCase3, () => {
            expect(part1(testCase3)).toBe(2);
        });
        it(testCase4, () => {
            expect(part1(testCase4)).toBe(31);
        });
        it('mainTestInput', () => {
            expect(part1(mainTestInput)).toBe(371);
        });
    });
});
