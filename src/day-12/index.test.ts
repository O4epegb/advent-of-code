import { part1, part2 } from './';
import { testInput } from './test-input';

const testInput1 = `
0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5
`;

describe('Day12 works', () => {
    describe('part1', () => {
        it(testInput1, () => {
            expect(part1(testInput1)).toBe(6);
        });
        it('mainTestInput', () => {
            expect(part1(testInput)).toBe(134);
        });
    });

    describe('part2', () => {
        it(testInput1, () => {
            expect(part2(testInput1)).toBe(2);
        });
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe(193);
        });
    });
});
