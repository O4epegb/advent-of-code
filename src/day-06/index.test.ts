import { part1, part2 } from './';

const mainTestInput = '4	1	15	12	0	9	9	5	5	8	7	3	14	5	12	3';

const testInput1 = '0	2	7	0';

describe('Day5 works', () => {
    describe('part1', () => {
        it(testInput1, () => {
            expect(part1(testInput1)).toBe(5);
        });
        it('mainTestInput', () => {
            expect(part1(mainTestInput)).toBe(6681);
        });
    });

    describe('part2', () => {
        it(testInput1, () => {
            expect(part2(testInput1)).toBe(4);
        });
        it('mainTestInput', () => {
            expect(part2(mainTestInput)).toBe(2392);
        });
    });
});
