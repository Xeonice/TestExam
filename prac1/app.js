const readline = require('readline');
const DealMethod = require('./DealMethod');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>>'

});
console.log("请输入回文数");
rl.on('line', (data) => {
    // 处理
    var result = new DealMethod();
    result.deal(data);
});
