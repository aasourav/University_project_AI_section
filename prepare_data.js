const brain = require('brain.js');
const data = require('./excel-to-json.json');
// const data = require('./excel-to-json.json');
const fs = require("fs");

const NEW = {};
let allSymp = {};
const arr = [];

for(let i = 0 ; i<data["Sheet1"].length ; i++){
    if(!NEW[data["Sheet1"][i].__EMPTY_5])
    {
        NEW[data["Sheet1"][i].__EMPTY_5]=1
        const Str = data["Sheet1"][i].__EMPTY_6.split(',');
        Str.map(data=> allSymp[data]=0);
    }
}
console.log(allSymp);

const BEW = {};
for(let i = 0 ; i<data["Sheet1"].length ; i++){
    const copySymp = {...allSymp}
    if(!BEW[data["Sheet1"][i].__EMPTY_5])
    {
        BEW[data["Sheet1"][i].__EMPTY_5]=1;
        // console.log(data["Sheet1"][i].__EMPTY_5,data["Sheet1"][i].__EMPTY_6)
        let D = {};
        const Str = data["Sheet1"][i].__EMPTY_6.split(',');
        Str.map(data=> copySymp[data]=1);
        console.log(copySymp);
        let p = {};
        p[data["Sheet1"][i].__EMPTY_5] = 1;
        arr.push({sympthom: {...copySymp}, disease:{...p}})
    }
}

fs.writeFileSync("data2.json", JSON.stringify(arr), "utf-8");
// console.log(arr);