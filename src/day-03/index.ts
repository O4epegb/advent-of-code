export function part1(input: string): number {
    const n = Number(input);

    if (n === 1) {
        return 0;
    }

    const root = Math.ceil(Math.sqrt(n));
    const sideLength = root % 2 !== 0 ? root : root + 1;
    const stepsToCenter = (sideLength - 1) / 2;
    const nextSquare = n - Math.pow(sideLength - 2, 2);
    const innerOffset = nextSquare % (sideLength - 1);
    return stepsToCenter + Math.abs(innerOffset - stepsToCenter);
}

// TODO part2
