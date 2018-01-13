import { part1, part2 } from './';
import { testInput } from './test-input';

describe('Day9 works', () => {
    describe('part1', () => {
        const testInput1 = '{}';
        const testInput2 = '{{{}}}';
        const testInput3 = '{{},{}}';
        const testInput4 = '{{{},{},{{}}}}';
        const testInput5 = '{<a>,<a>,<a>,<a>}';
        const testInput6 = '{{<ab>},{<ab>},{<ab>},{<ab>}}';
        const testInput7 = '{{<!!>},{<!!>},{<!!>},{<!!>}}';
        const testInput8 = '{{<a!>},{<a!>},{<a!>},{<ab>}}';

        it(testInput1, () => {
            expect(part1(testInput1)).toBe(1);
        });
        it(testInput2, () => {
            expect(part1(testInput2)).toBe(6);
        });
        it(testInput3, () => {
            expect(part1(testInput3)).toBe(5);
        });
        it(testInput4, () => {
            expect(part1(testInput4)).toBe(16);
        });
        it(testInput5, () => {
            expect(part1(testInput5)).toBe(1);
        });
        it(testInput6, () => {
            expect(part1(testInput6)).toBe(9);
        });
        it(testInput7, () => {
            expect(part1(testInput7)).toBe(9);
        });
        it(testInput8, () => {
            expect(part1(testInput8)).toBe(3);
        });
        it('mainTestInput', () => {
            expect(part1(testInput)).toBe(14190);
        });
    });

    describe('part2', () => {
        const testInput1 = '<>';
        const testInput2 = '<random characters>';
        const testInput3 = '<<<<>';
        const testInput4 = '<{!>}>';
        const testInput5 = '<!!>';
        const testInput6 = '<!!!>>';
        const testInput7 = '<{o"i!a,<{i<a>';

        it(testInput1, () => {
            expect(part2(testInput1)).toBe(0);
        });
        it(testInput2, () => {
            expect(part2(testInput2)).toBe(17);
        });
        it(testInput3, () => {
            expect(part2(testInput3)).toBe(3);
        });
        it(testInput4, () => {
            expect(part2(testInput4)).toBe(2);
        });
        it(testInput5, () => {
            expect(part2(testInput5)).toBe(0);
        });
        it(testInput6, () => {
            expect(part2(testInput6)).toBe(0);
        });
        it(testInput7, () => {
            expect(part2(testInput7)).toBe(10);
        });
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe(7053);
        });
    });
});
