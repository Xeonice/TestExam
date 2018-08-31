const readline = require('readline');
const DealMethod = require('./DealMethod');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>>'

});
console.log("请输入需要检测的数组（示例：1 2 2 2）");
rl.on('line', (data) => {
    // 处理
    var result = new DealMethod();
    console.log(result.deal(data));
    rl.close();
});
