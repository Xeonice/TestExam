module.exports = class {
    deal(inputNum) {
        if (this.daozhi(inputNum) == inputNum) {
            console.log(inputNum + "是回文数");
        } else {
            console.log(inputNum + "不是回文数");
        }
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