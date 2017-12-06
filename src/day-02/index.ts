export function part1(checksum: string): number {
    return checksum
        .trim()
        .split('\n')
        .map(row => {
            const numbers = row.split(/\s/).map(str => Number(str));
            const min = Math.min(...numbers);
            const max = Math.max(...numbers);
            return max - min;
        })
        .reduce((acc, num) => acc + num);
}

export function part2(checksum: string): number {
    return checksum
        .trim()
        .split('\n')
        .map(row => {
            const numbers = row.split(/\s/).map(str => Number(str));

            for (let i = 0; i < numbers.length; i++) {
                const firstNumber = numbers[i];

                for (let j = 0; j < numbers.length; j++) {
                    if (i === j) {
                        continue;
                    }

                    const secondNumber = numbers[j];
                    const min = Math.min(firstNumber, secondNumber);
                    const max = Math.max(firstNumber, secondNumber);
                    const divisionResult = max / min;

                    if (isInteger(divisionResult)) {
                        return divisionResult;
                    }
                }
            }

            return 0;
        })
        .reduce((acc, num) => acc + num);
}

export function isInteger(value: any): boolean {
    return (
        typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value
    );
}
