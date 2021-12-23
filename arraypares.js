function substituirPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("voce já é 0");
        } else if (array[i] % 2 === 0) {
            console.log (`substituindo o ${array[i]} por 0`);
            array[i] = 0
        }
    }
    return array;
}

let cj = [0, 5, 37, 21, 10, 12];
console.log (substituirPares(cj));