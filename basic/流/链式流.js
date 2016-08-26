/**
 * Created by Shadow on 2016/8/25.
 */



var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('D:/git_projects/userinterface-express/basic/resources/input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('D:/git_projects/userinterface-express/basic/resources/input.txt.gz'));

console.log("文件压缩完成。");





