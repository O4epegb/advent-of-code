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

// TODO cant handle real test input
export function part2(programmList: string): number {
    const programmsWeightByName: { [key: string]: number } = {};
    const programmDepsByName: { [key: string]: Array<string> } = {};

    programmList
        .trim()
        .split('\n')
        .forEach(programm => {
            const [, programmName, weight, , dependecies = ''] = programm.match(
                /(.*)\s\((\d*)\)( -> (.*))?/
            ) as Array<string>;

            programmsWeightByName[programmName] = Number(weight);

            if (!dependecies) {
                return;
            }

            programmDepsByName[programmName] = dependecies.split(', ');
        });

    const programmNames = Object.keys(programmDepsByName);

    for (const name of programmNames) {
        const deps = programmDepsByName[name];
        const depWeighs = deps.map(depName => programmsWeightByName[depName]);
        const totalWeights = [];

        for (const depName of deps) {
            const otherDeps = programmDepsByName[depName] || [];

            // if (!otherDeps) {
            //     continue;
            // }

            const otherDepTotalWeight = otherDeps.reduce(
                (acc, depName1) => acc + programmsWeightByName[depName1],
                0
            );

            // const someDepsAreWrong =
            //     otherDepTotalWeight / otherDeps.length !==
            //     programmsWeightByName[otherDeps[0]];

            // if (someDepsAreWrong) {
            //     continue;
            // }

            const totalWeghtWithDeps =
                otherDepTotalWeight + programmsWeightByName[depName];

            totalWeights.push(totalWeghtWithDeps);
        }

        // if (!a.length) {
        //     continue;
        // }

        console.log(totalWeights);

        const average = totalWeights.reduce(
            (acc, weight) => (acc + weight) / 2
        );

        for (let i = 0; i < totalWeights.length; i++) {
            const weight = totalWeights[i];

            if (weight > average) {
                const nextItem = totalWeights[(i + 1) % totalWeights.length];
                const difference = weight - nextItem;
                const currentItem = depWeighs[i];
                console.log({
                    totalWeights,
                    weight,
                    nextItem,
                    depWeighs,
                    currentItem,
                    difference
                });
                return currentItem - difference;
            }
        }
    }

    return 0;
}
