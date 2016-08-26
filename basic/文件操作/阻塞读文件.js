/**
 * Created by Shadow on 2016/8/24.
 */
var fs = require("fs");
var data = fs.readFileSync('D:/git_projects/userinterface-express/basic/resources/input.txt');
console.log(data.toString());

console.log("程序执行结束!");