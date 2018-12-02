type Operation = 'dec' | 'inc';
type Condition = '>' | '<' | '<=' | '>=' | '==' | '!=';

interface Instruction {
    target: string;
    operation: Operation;
    value: number;
    conditionTarget: string;
    condition: Condition;
    conditionValue: number;
}

type InstructionList = Array<Instruction>;

interface RegisterMap {
    [name: string]: number;
}

function processInstructions(instructionsString: string) {
    let maxValueEver = 0;
    const registerMap = {} as RegisterMap;
    const instructionsList = [] as InstructionList;

    instructionsString
        .trim()
        .split('\n')
        .forEach(instruction => {
            const [
                target,
                operation,
                value,
                ,
                conditionTarget,
                condition,
                conditionValue
            ] = instruction.split(' ');

            registerMap[target] = 0;
            registerMap[conditionTarget] = 0;
            instructionsList.push({
                target,
                operation: operation as Operation,
                value: Number(value),
                conditionTarget,
                condition: condition as Condition,
                conditionValue: Number(conditionValue)
            });
        });

    instructionsList.forEach(instruction => {
        const { target } = instruction;
        const result = compute(
            registerMap[target],
            registerMap[instruction.conditionTarget],
            instruction
        );
        registerMap[target] = result;
        if (result > maxValueEver) {
            maxValueEver = result;
        }
    });

    return {
        maxValueEver,
        maxValueNow: Object.keys(registerMap).reduce(
            (acc, key) => Math.max(acc, registerMap[key]),
            0
        )
    };
}

function compute(
    startingValue: number,
    conditionTargetValue: number,
    { operation, value, condition, conditionValue }: Instruction
): number {
    return compareCondition(conditionTargetValue, conditionValue, condition)
        ? performOperation(startingValue, value, operation)
        : startingValue;
}

function compareCondition(
    valueA: number,
    valueB: number,
    condition: Condition
): boolean {
    switch (condition) {
        case '>':
            return valueA > valueB;
        case '<':
            return valueA < valueB;
        case '<=':
            return valueA <= valueB;
        case '>=':
            return valueA >= valueB;
        case '==':
            return valueA === valueB;
        case '!=':
            return valueA !== valueB;
        default:
            return assertUnreachable(condition);
    }
}

function performOperation(
    valueA: number,
    valueB: number,
    operation: Operation
): number {
    return operation === 'dec' ? valueA - valueB : valueA + valueB;
}

function assertUnreachable(x: never): never {
    throw new Error(`Didn't expect to get here ${x}`);
}

export function part1(input: string): number {
    return processInstructions(input).maxValueNow;
}

export function part2(input: string): number {
    return processInstructions(input).maxValueEver;
}
