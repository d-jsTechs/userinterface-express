/**
 * Created by Shadow on 2016/8/24.
 */
var fs = require("fs");

fs.readFile('D:/git_projects/userinterface-express/basic/resources/input.txt', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
});

console.log("程序执行结束!");