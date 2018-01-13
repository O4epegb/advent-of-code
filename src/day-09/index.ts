enum Chars {
    openGroup = '{',
    closeGroup = '}',
    openGarbage = '<',
    closeGarbage = '>',
    cancel = '!'
}

function calculate(input: string) {
    const charactersLength = input.length;
    let pointer = 0;
    let groupTotal = 0;
    let garbageTotal = 0;
    let currentLevel = 0;
    let insideGarbage = false;

    while (true) {
        if (pointer >= charactersLength) {
            return {
                groupTotal,
                garbageTotal
            };
        }

        const char = input[pointer];

        pointer++;

        if (!insideGarbage && char === Chars.openGroup) {
            currentLevel++;
        }

        if (!insideGarbage && char === Chars.closeGroup) {
            groupTotal = groupTotal + currentLevel;
            currentLevel--;
        }

        if (char === Chars.closeGarbage) {
            insideGarbage = false;
        }

        if (insideGarbage && char !== Chars.cancel) {
            garbageTotal++;
        }

        if (!insideGarbage && char === Chars.openGarbage) {
            insideGarbage = true;
        }

        if (char === Chars.cancel) {
            pointer++;
        }
    }
}

export function part1(input: string): number {
    return calculate(input).groupTotal;
}

export function part2(input: string): number {
    return calculate(input).garbageTotal;
}
