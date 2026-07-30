const numbers1 = [15, 8, 42, 23, 54, 7, 19, 24];
const numbers2 = [10, 3, 4, 23, 35, 54, 7, 19];
let commonNumbers = [];

for (let i = 0; i < numbers1.length; i++) {

    if (numbers1.includes(numbers2[i])) {

        commonNumbers.push(numbers2[i]);

    }

}
console.log(commonNumbers);