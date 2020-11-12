
const spiralMatrixFactory = (n) => {
    // note: if argument is array then we take the length value isntead
    let columnStart = 0;
    let columnEnd = n - 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let counter = 1;
    let result = Array.from(Array(n), () => new Array(n))
    while (columnStart <= columnEnd && rowStart <= rowEnd) {
        for (let i = columnStart; i <= columnEnd; i++) {
            result[rowStart][i] = counter;
            counter++
        }
        rowStart++

        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][columnEnd] = counter;
            counter++
        }
        columnEnd--
        for (let i = columnEnd; i >= columnStart; i--) {
            result[rowEnd][i] = counter;
            counter++
        }
        rowEnd--
        for (let i = rowEnd; i >= rowStart; i--) {
            result[i][columnStart] = counter;
            counter++
        }
        columnStart++
    }
    console.log(result);
    return result;
}

spiralMatrixFactory(5)

const counter = (max) => {
    for (let i = 1; i <= max; i++) {
        console.log(i);
    }
}
counter(10);