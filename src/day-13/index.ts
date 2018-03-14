interface Guard extends Array<number> {
    0: number;
    1: number;
    length: 2;
}

const isCaughtByGuard = (delay: number) => ([depth, range]: Guard) =>
    (delay + depth) % (2 * (range - 1)) === 0;

export function part1(input: string): number {
    const guards = input
        .trim()
        .split('\n')
        .map(line => line.split(': ').map(Number) as Guard);

    return guards
        .filter(isCaughtByGuard(0))
        .reduce((acc, [depth, range]) => acc + depth * range, 0);
}

export function part2(input: string): number {
    const guards = input
        .trim()
        .split('\n')
        .map(line => line.split(': ').map(Number) as Guard);

    let delay = 0;

    while (guards.some(isCaughtByGuard(delay))) {
        delay++;
    }

    return delay;
}
