// REFACTOR THIS STUFF

export function part1(input: string): number {
    const regexp = /(.*) <-> (.*)/;
    const graph = new Graph();
    const allVertices: Array<Vertex> = [];

    input
        .trim()
        .split('\n')
        .forEach(line => {
            const [, vertex, neighboursString] = line.match(regexp) as Array<
                Vertex
            >;

            const neighbours = neighboursString.split(', ');

            allVertices.push(vertex);
            graph.addVertex(vertex);

            neighbours.forEach(neighbour => graph.addEdge(vertex, neighbour));
        });

    const mainVertex = allVertices[0];

    return allVertices.reduce((acc, vertex) => {
        let traversed = false;

        graph.traverseDFS(mainVertex, vertex, () => {
            traversed = true;
        });

        return traversed ? acc + 1 : acc;
    }, 0);
}

export function part2(input: string): number {
    const regexp = /(.*) <-> (.*)/;
    const graph = new Graph();
    const allVertices: Array<Vertex> = [];
    const mainVertices: Array<Vertex> = [];

    input
        .trim()
        .split('\n')
        .forEach(line => {
            const [, vertex, neighboursString] = line.match(regexp) as Array<
                Vertex
            >;

            const neighbours = neighboursString.split(', ');

            allVertices.push(vertex);
            graph.addVertex(vertex);

            neighbours.forEach(neighbour => graph.addEdge(vertex, neighbour));
        });

    const mainVertex = allVertices[0];
    mainVertices.push(mainVertex);

    allVertices.forEach(vertex => {
        let traversed = false;

        mainVertices.forEach(groupMainVertex => {
            graph.traverseDFS(groupMainVertex, vertex, () => {
                traversed = true;
            });
        });

        if (!traversed) {
            mainVertices.push(vertex);
        }
    });

    return mainVertices.length;
}

type Vertex = string;

export class Graph {
    adjacencyList = new Map<Vertex, Array<Vertex>>();
    verticesNumber = 0;

    addVertex(vertex: Vertex) {
        this.verticesNumber++;
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertexA: Vertex, vertexB: Vertex) {
        const listA = this.adjacencyList.get(vertexA);
        const listB = this.adjacencyList.get(vertexB);

        if (listA && listB) {
            listA.push(vertexB);
            listB.push(vertexA);
        }
    }

    traverseDFS(
        startingVertex: Vertex,
        targetVertex: Vertex,
        cb: (vertexName: Vertex) => any = () => {}
    ) {
        const visited: { [vertex: string]: boolean } = {};

        const iter = (vertex: Vertex) => {
            const vertexNeighbours = this.adjacencyList.get(vertex);

            if (!vertexNeighbours) {
                throw new Error('Vertex not found');
            }

            visited[vertex] = true;

            if (vertex === targetVertex) {
                cb(vertex);
            }

            for (const neighbourVertex of vertexNeighbours) {
                if (!visited[neighbourVertex]) {
                    iter(neighbourVertex);
                }
            }
        };

        iter(startingVertex);
    }
}
