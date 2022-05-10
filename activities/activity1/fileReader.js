let fs=require('fs');

let fileData=fs.readFileSync("./file.txt","utf-8");

console.log(fileData);