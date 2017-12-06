export function part1(sequence: string): number {
    let sum = 0;
    const numbers = sequence.split('').map(str => Number(str));
    const firstNumber = numbers[0];
    const numbersCount = numbers.length - 1;

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        const next = numbers[i + 1];

        if (
            current === next ||
            (i === numbersCount && firstNumber === current)
        ) {
            sum = sum + current;
        }
    }

    return sum;
}

export function part2(sequence: string): number {
    let sum = 0;
    const numbers = sequence.split('').map(str => Number(str));
    const step = numbers.length / 2;

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        const nextItemIndex = (i + step) % numbers.length;
        const next = numbers[nextItemIndex];

        if (current === next) {
            sum = sum + current;
        }
    }

    return sum;
}
