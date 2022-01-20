function randomIndex<T>(arr: T[]) {
    const index = Math.floor(Math.random() * arr.length);
    return index;
}

function randomNFromArray<T>(arr: T[], n: number) {
    const randomN: T[] = [];
    const indexMap: { [index: string]: number } = {};

    for (let i = 0; i < n; i += 1) {
        let index = randomIndex(arr);
        while (indexMap[String(index)]) index = randomIndex(arr);
        randomN.push(arr[index]);
        indexMap[String(index)] = 1;
    }

    return randomN;
}

export { randomIndex, randomNFromArray };
