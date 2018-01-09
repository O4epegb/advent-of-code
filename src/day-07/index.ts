export function part1(programmList: string): string {
    const allProgrammNames: Array<string> = [];
    const deps: { [key: string]: boolean } = {};

    programmList
        .trim()
        .split('\n')
        .forEach(programm => {
            const [, programmName, , , dependecies = ''] = programm.match(
                /(.*)\s\((\d*)\)( -> (.*))?/
            ) as Array<string>;

            if (!dependecies) {
                return;
            }

            allProgrammNames.push(programmName);
            dependecies.split(', ').forEach(dep => (deps[dep] = true));
        });

    return allProgrammNames.filter(programmName => !deps[programmName])[0];
}

interface Node {
    id: string;
    weight: number;
    children: Array<Node>;
    childrenNames: Array<string> | null;
}

function totalNodeWeight({ weight, children }: Node): number {
    return (
        weight +
        children.reduce((acc, child) => acc + totalNodeWeight(child), 0)
    );
}

export function part2(input: string): number {
    const regexp = /(.*)\s\((\d*)\)( -> (.*))?/;
    const map: { [nodeName: string]: Node } = {};

    input
        .trim()
        .split('\n')
        .forEach(line => {
            const [, nodeName, weight, , childrenString = ''] = line.match(
                regexp
            ) as Array<string>;

            map[nodeName] = {
                id: nodeName,
                weight: Number(weight),
                children: [],
                childrenNames: childrenString
                    ? childrenString.split(', ')
                    : null
            };
        });

    for (const nodeName of Object.keys(map)) {
        const currentNode = map[nodeName];
        if (currentNode.childrenNames) {
            currentNode.children = currentNode.childrenNames.map(
                name => map[name]
            );
        }
    }

    const root = map[part1(input)];

    // Now work backwards, which 'child' has the incorrect weight
    // getWrongChild will recursively scan for the wrong child
    const { node, targetWeight } = getWrongChild(root, 0);
    // Get the adjustment value
    const diff = totalNodeWeight(node) - targetWeight;
    // Return the node weight - the difference it needs
    return node.weight - diff;
}

function getWrongChild(
    node: Node,
    targetWeight: number
): {
    node: Node;
    targetWeight: number;
} {
    const map: { [nodeSum: string]: { node: Node; count: number } } = {};

    node.children.forEach(child => {
        const childSum = totalNodeWeight(child);
        // If we have seen this sum before, then increment
        if (map[childSum]) {
            map[childSum].count++;
        } else {
            // Else a new sum, so create map object
            map[childSum] = { node: child, count: 1 };
        }
    });

    // Min is the node we see the least often
    let minNode = null;
    // The weight the other nodes are
    let weight = 0;

    for (const sum in map) {
        if (map[sum].count === 1) {
            // Get the wrong node
            minNode = map[sum].node;
        } else {
            // Set the correct weight
            weight = Number(sum);
        }
    }

    if (minNode) {
        // Return the wrongChild of the node that is wrong, and pass the weight the node should be!
        return getWrongChild(minNode, weight);
    }

    // If !min, then unbalance in lower children, so inbalance must be this node!
    return { node, targetWeight };
}
