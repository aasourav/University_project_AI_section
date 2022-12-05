const brain = require('brain.js');
const data = require('./data.json');
const fs = require("fs");

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.IN,
    output: item.OUT,
}))

network.train(trainingData,{
    iterations: 2000
});

const networkState = network.toJSON();
fs.writeFileSync("network_state.json",  JSON.stringify(networkState), "utf-8");


// const output = network.run("The code has some bugs")

// console.log(output)

console.log("train done")