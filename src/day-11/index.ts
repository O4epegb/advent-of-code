enum Directions {
    n = 'n',
    ne = 'ne',
    nw = 'nw',
    s = 's',
    se = 'se',
    sw = 'sw'
}

class Vector {
    constructor(public x: number, public y: number) {}

    plus(anotherVector: Vector) {
        return new Vector(this.x + anotherVector.x, this.y + anotherVector.y);
    }
}

const directionHandlers = {
    [Directions.n]: (vector: Vector) => vector.plus(new Vector(0, -1)),
    [Directions.ne]: (vector: Vector) => vector.plus(new Vector(1, -1)),
    [Directions.nw]: (vector: Vector) => vector.plus(new Vector(-1, 0)),
    [Directions.s]: (vector: Vector) => vector.plus(new Vector(0, 1)),
    [Directions.se]: (vector: Vector) => vector.plus(new Vector(1, 0)),
    [Directions.sw]: (vector: Vector) => vector.plus(new Vector(-1, 1))
};

function calculate(input: string) {
    const directions = input.split(',') as Array<Directions>;

    const start = new Vector(0, 0);
    let final = start;
    let maxDistance = 0;

    for (const direction of directions) {
        final = directionHandlers[direction](final);
        maxDistance = Math.max(distance(start, final), maxDistance);
    }

    return {
        maxDistance,
        finalDistance: distance(start, final)
    };
}

function distance(a: Vector, b: Vector) {
    return (
        (Math.abs(a.x - b.x) +
            Math.abs(a.x + a.y - b.x - b.y) +
            Math.abs(a.y - b.y)) /
        2
    );
}

export function part1(input: string): number {
    return calculate(input).finalDistance;
}

export function part2(input: string): number {
    return calculate(input).maxDistance;
}
