const brain = require('brain.js');
const data = require('./data.json');
const fs = require("fs");

const net = new brain.recurrent.LSTM();

net.train([
    { input:   'I feel great about the world!', output: 'happy' },
  { input: 'The world is a terrible place!', output: 'sad' },
  { input: 'I am lucky to having you.', output: 'graceful' },
  ],{
    iterations:5000,
    errorThresh:0.0015,
    logPeriod:20,
    log: state => console.log(state)
  });

  const networkState = net.toJSON();
  fs.writeFileSync("custom_network.json", JSON.stringify(networkState), "utf-8");

const output = net.run('I call myself you ray');
console.log(output)