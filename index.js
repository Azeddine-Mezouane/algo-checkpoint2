function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

const numbers = [8, 4, 7, 1, 3];
console.log("Tableau original :", numbers);

const sortedNumbers = insertionSort(numbers);
console.log("Tableau trié :", sortedNumbers);
