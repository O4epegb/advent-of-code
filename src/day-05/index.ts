type Iter = () => number | Iter;

type Trampoline<T> = T | (() => Trampoline<T>);

function trampoline<T>(firstResult: Trampoline<T>) {
    let result = firstResult;
    while (result instanceof Function) {
        result = result();
    }
    return result;
}

export function part1(instructionList: string): number {
    const instructions = instructionList
        .trim()
        .split('\n')
        .map(Number);

    function iter(steps: number, pointer: number): Iter {
        return () => {
            if (pointer < 0 || pointer >= instructions.length) {
                return steps;
            }

            const currentInstruction = instructions[pointer];
            instructions[pointer] = currentInstruction + 1;

            return iter(steps + 1, pointer + currentInstruction);
        };
    }

    return trampoline<number>(iter(0, 0));
}

export function part2(instructionList: string): number {
    let pointer = 0;
    let steps = 0;
    const instructions = instructionList
        .trim()
        .split('\n')
        .map(Number);

    while (pointer >= 0 && pointer < instructions.length) {
        const currentInstruction = instructions[pointer];
        instructions[pointer] =
            currentInstruction + (currentInstruction >= 3 ? -1 : 1);
        pointer = pointer + currentInstruction;
        steps++;
    }

    return steps;
}
