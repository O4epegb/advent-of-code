import { part1, part2 } from './';
import { testInput } from './test-input';

const testInput1 = `0
3
0
1
-3
`;

describe('Day5 works', () => {
    describe('part1', () => {
        it(testInput1, () => {
            expect(part1(testInput1)).toBe(5);
        });
        it('mainTestInput', () => {
            expect(part1(testInput)).toBe(318883);
        });
    });

    describe('part2', () => {
        it(testInput1, () => {
            expect(part2(testInput1)).toBe(10);
        });
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe(23948711);
        });
    });
});
