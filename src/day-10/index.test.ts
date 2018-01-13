import { part1, part2, makeHashingList } from './';
import { testInput } from './test-input';

describe('Day10 works', () => {
    describe('part1', () => {
        const testInput1 = '3,4,1,5';

        it(testInput1, () => {
            expect(part1(testInput1, makeHashingList(4))).toBe(12);
        });
        it('mainTestInput', () => {
            expect(part1(testInput, makeHashingList(255))).toBe(2928);
        });
    });

    describe('part2', () => {
        const testInput1 = '';
        const testInput2 = 'AoC 2017';
        const testInput3 = '1,2,3';
        const testInput4 = '1,2,4';

        it(testInput1, () => {
            expect(part2(testInput1)).toBe('a2582a3a0e66e6e86e3812dcb672a272');
        });
        it(testInput2, () => {
            expect(part2(testInput2)).toBe('33efeb34ea91902bb2f59c9920caa6cd');
        });
        it(testInput3, () => {
            expect(part2(testInput3)).toBe('3efbe78a8d82f29979031a4aa0b16a9d');
        });
        it(testInput4, () => {
            expect(part2(testInput4)).toBe('63960835bcdc130f0b66d7ff4f6a5a8e');
        });
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe('0c2f794b2eb555f7830766bf8fb65a16');
        });
    });
});
