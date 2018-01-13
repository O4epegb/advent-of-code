function calculateSimpleKnotHash(
    input: string,
    hashingList: Array<number>
): Array<number> {
    const selectorList = input.split(',').map(x => Number(x));
    const hash = hashingList;
    let skipSize = 0;
    let pointer = 0;

    for (const selector of selectorList) {
        const indices: Array<number> = [];
        const elements: Array<number> = [];

        for (let i = 0; i < selector; i++) {
            const elementIndex = (pointer + i) % hash.length;
            const element = hash[elementIndex];
            indices.push(elementIndex);
            elements.push(element);
        }

        elements.reverse().forEach((element, elementIndex) => {
            const newIndex = indices[elementIndex];
            hash[newIndex] = element;
        });

        pointer = (pointer + skipSize + selector) % hash.length;
        skipSize++;
    }

    return hash;
}

function calculateKnotHash(input: string): string {
    const selectorList = input
        .split('')
        .map(x => x.charCodeAt(0))
        .concat(17, 31, 73, 47, 23);
    const hash = makeHashingList(255);
    let skipSize = 0;
    let pointer = 0;

    for (let round = 0; round < 64; round++) {
        for (const selector of selectorList) {
            const indices: Array<number> = [];
            const elements: Array<number> = [];

            for (let i = 0; i < selector; i++) {
                const elementIndex = (pointer + i) % hash.length;
                const element = hash[elementIndex];
                indices.push(elementIndex);
                elements.push(element);
            }

            elements.reverse().forEach((element, elementIndex) => {
                const newIndex = indices[elementIndex];
                hash[newIndex] = element;
            });

            pointer = (pointer + skipSize + selector) % hash.length;
            skipSize++;
        }
    }

    return hash
        .reduce(
            (acc, x, index) => {
                const chunkIndex = Math.floor(index / 16);

                if (!acc[chunkIndex]) {
                    acc[chunkIndex] = [];
                }

                acc[chunkIndex].push(x);

                return acc;
            },
            [] as Array<Array<number>>
        )
        .reduce(
            (acc, xs) => {
                acc.push(xs.reduce((a, b) => a ^ b));
                return acc;
            },
            [] as Array<number>
        )
        .map(toHex)
        .join('');
}

function toHex(x: number) {
    return ('0' + x.toString(16)).slice(-2);
}

export function makeHashingList(n: number) {
    const list = [];
    for (let i = 0; i <= n; i++) {
        list.push(i);
    }
    return list;
}

export function part1(input: string, hashingList: Array<number>): number {
    const hash = calculateSimpleKnotHash(input, hashingList);
    return hash[0] * hash[1];
}

export function part2(input: string): string {
    return calculateKnotHash(input);
}
