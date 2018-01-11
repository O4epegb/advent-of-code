import { part1, part2 } from './';
import { testInput } from './test-input';

const testInput1 = `
pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)
`;

describe('Day7 works', () => {
    describe('part1', () => {
        it(testInput1, () => {
            expect(part1(testInput1)).toBe('tknk');
        });
        it('mainTestInput', () => {
            expect(part1(testInput)).toBe('vgzejbd');
        });
    });

    describe('part2', () => {
        it(testInput1, () => {
            expect(part2(testInput1)).toBe(60);
        });
        it('mainTestInput', () => {
            expect(part2(testInput)).toBe(1226);
        });
    });
});
