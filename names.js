/*
* 同步方案
*
* 扫描某个文件夹的所有内容
*/

// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = './';

// ---------------------------------
// 同步方案

var files = fs.readdirSync(dirPathString);
console.log(files);

/*
* 同步方案
*
* 将内容写入到文件中
*/

// 引入fs模块
var fs = require('fs');

// 定义要写入的文件路径
var outputPathString = './six.txt';

// 定义文件内容变量fileContent
var fileContent = files;

// ---------------------------------
// 同步方案

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString, fileContent);