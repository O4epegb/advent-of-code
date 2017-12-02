// The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.

// For example, given the following spreadsheet:

// 5 1 9 5
// 7 5 3
// 2 4 6 8
// The first row's largest and smallest values are 9 and 1, and their difference is 8.
// The second row's largest and smallest values are 7 and 3, and their difference is 4.
// The third row's difference is 6.
// In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.
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

// It sounds like the goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number. They would like you to find those numbers on each line, divide them, and add up each line's result.

// For example, given the following spreadsheet:

// 5 9 2 8
// 9 4 7 3
// 3 8 6 5
// In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
// In the second row, the two numbers are 9 and 3; the result is 3.
// In the third row, the result is 2.
// In this example, the sum of the results would be 4 + 3 + 2 = 9.
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
