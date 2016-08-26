/**
 * Created by Shadow on 2016/8/25.
 */
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('D:/git_projects/userinterface-express/basic/resources/input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('D:/git_projects/userinterface-express/basic/resources/input.zipped.txt'));

console.log("文件解压完成。");