import { part1, part2 } from './';
import { testInput } from './test-input';

const testInput1 = `
b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10
`;

describe('Day8 works', () => {
    describe('part1', () => {
        it(testInput1, () => {
            expect(part1(testInput1)).toBe(1);
        });
        it('mainTestInput', () => {
            expect(part1(testInput)).toBe(4832);
        });
    });

    describe('part2', () => {
        it(testInput1, () => {
            expect(part2(testInput1)).toBe(10);
        });
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe(5443);
        });
    });
});
