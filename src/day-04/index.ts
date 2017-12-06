export function part1(list: string): number {
    return list
        .trim()
        .split('\n')
        .map(passphrase => {
            const words = passphrase.split(' ');
            return isValidPassSequence(words) ? 1 : 0;
        })
        .reduce((acc: number, num: number) => acc + num, 0);
}

export function part2(list: string): number {
    return list
        .trim()
        .split('\n')
        .map(passphrase => {
            const words = passphrase.split(' ').map(word =>
                word
                    .split('')
                    .sort()
                    .join('')
            );
            return isValidPassSequence(words) ? 1 : 0;
        })
        .reduce((acc: number, num: number) => acc + num, 0);
}

export function isValidPassSequence(words: Array<string>): boolean {
    const hash: { [key: string]: boolean } = {};

    for (const word of words) {
        if (hash[word]) {
            return false;
        } else {
            hash[word] = true;
        }
    }

    return true;
}
