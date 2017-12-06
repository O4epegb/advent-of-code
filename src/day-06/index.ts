export function part1(banks: string): number {
    const hash: { [key: string]: boolean } = {};
    const blocks = banks
        .trim()
        .split(/\t/)
        .map(Number);

    const iter = (counter: number): number => {
        const snapshot = blocks.toString();

        if (hash[snapshot]) {
            return counter;
        }

        hash[snapshot] = true;

        const maxBlockNumber = Math.max(...blocks);
        const maxBlockIndex = blocks.indexOf(maxBlockNumber);
        blocks[maxBlockIndex] = 0;

        for (let i = 1; i <= maxBlockNumber; i++) {
            const nextBlockIndex = (maxBlockIndex + i) % blocks.length;
            blocks[nextBlockIndex] = blocks[nextBlockIndex] + 1;
        }

        return iter(counter + 1);
    };

    return iter(0);
}

export function part2(banks: string): number {
    const hash: { [key: string]: string } = {};
    const blocks = banks
        .trim()
        .split(/\t/)
        .map(Number);

    const iter = (counter: number): number => {
        const snapshot = blocks.toString();

        if (hash[snapshot]) {
            return counter - Number(hash[snapshot]);
        }

        hash[snapshot] = String(counter);

        const maxBlockNumber = Math.max(...blocks);
        const maxBlockIndex = blocks.indexOf(maxBlockNumber);
        blocks[maxBlockIndex] = 0;

        for (let i = 1; i <= maxBlockNumber; i++) {
            const nextBlockIndex = (maxBlockIndex + i) % blocks.length;
            blocks[nextBlockIndex] = blocks[nextBlockIndex] + 1;
        }

        return iter(counter + 1);
    };

    return iter(0);
}
