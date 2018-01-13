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
    let total = 0;
    let currentLevel = 0;
    let insideGarbage = false;
    let totalGarbage = 0;

    while (true) {
        if (pointer >= charactersLength) {
            return {
                groupTotal: total,
                garbageTotal: totalGarbage
            };
        }

        const char = input[pointer];

        pointer++;

        if (!insideGarbage && char === Chars.openGroup) {
            currentLevel++;
        }

        if (!insideGarbage && char === Chars.closeGroup) {
            total = total + currentLevel;
            currentLevel--;
        }

        if (char === Chars.closeGarbage) {
            insideGarbage = false;
        }

        if (insideGarbage && char !== Chars.cancel) {
            totalGarbage++;
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
