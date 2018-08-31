module.exports = class {
    deal(input) {
        let inputArray = input.split(' ');
        let temp = [];
        for (let i = 0; i < inputArray.length; i++) {
            if (temp.indexOf(inputArray[i]) == -1) {
                temp.push(inputArray[i]);
            }
        }
        return temp.length;
    }
}