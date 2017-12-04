import { part1, part2, isValidPassSequence } from './';
import { testInput } from './test-input';

describe('Day4 works', () => {
    describe('part1', () => {
        it('aa bb cc dd ee', () => {
            expect(
                isValidPassSequence('aa bb cc dd ee'.split(' '))
            ).toBeTruthy();
        });
        it('aa bb cc dd aa', () => {
            expect(
                isValidPassSequence('aa bb cc dd aa'.split(' '))
            ).toBeFalsy();
        });
        it('aa bb cc dd aaa', () => {
            expect(
                isValidPassSequence('aa bb cc dd aaa'.split(' '))
            ).toBeTruthy();
        });
        it('mainTestInput', () => {
            expect(part1(testInput)).toBe(477);
        });
    });

    describe('part2', () => {
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe(167);
        });
    });
});
