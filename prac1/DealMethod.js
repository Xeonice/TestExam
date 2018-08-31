module.exports = class {
    deal(inputNum) {
        let result = '';
        if (this.daozhi(inputNum) == inputNum) {
            result = inputNum + "是回文数"
        } else {
            result = inputNum + "是回文数"
        }
        return result;
    }
    daozhi(num) {
        let newNumber = 0;

        while (num != 0) {
            newNumber *= 10;
            newNumber = newNumber + (num % 10);
            num = Math.floor(num / 10);
        }

        return newNumber;
    }
}