import { part1, part2 } from './';
import { testInput } from './test-input';

const testInput1 = `
0: 3
1: 2
4: 4
6: 4
`;

describe('Day13 works', () => {
    describe('part1', () => {
        it(testInput1, () => {
            expect(part1(testInput1)).toBe(24);
        });
        it('mainTestInput', () => {
            expect(part1(testInput)).toBe(1);
        });
    });

    describe('part2', () => {
        it(testInput1, () => {
            expect(part2(testInput1)).toBe(1);
        });
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe(1);
        });
    });
});
