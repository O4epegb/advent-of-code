import { part1, part2 } from './';
import { testInput } from './test-input';

const testInput1 = 'ne,ne,ne';
const testInput2 = 'ne,ne,sw,sw';
const testInput3 = 'ne,ne,s,s';
const testInput4 = 'se,sw,se,sw,sw';

describe('Day11 works', () => {
    describe('part1', () => {
        it(testInput1, () => {
            expect(part1(testInput1)).toBe(3);
        });
        it(testInput2, () => {
            expect(part1(testInput2)).toBe(0);
        });
        it(testInput3, () => {
            expect(part1(testInput3)).toBe(2);
        });
        it(testInput4, () => {
            expect(part1(testInput4)).toBe(3);
        });
        it('mainTestInput', () => {
            expect(part1(testInput)).toBe(764);
        });
    });

    describe('part2', () => {
        it(testInput1, () => {
            expect(part2(testInput1)).toBe(3);
        });
        it(testInput2, () => {
            expect(part2(testInput2)).toBe(2);
        });
        it(testInput3, () => {
            expect(part2(testInput3)).toBe(2);
        });
        it(testInput4, () => {
            expect(part2(testInput4)).toBe(3);
        });
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe(1532);
        });
    });
});
