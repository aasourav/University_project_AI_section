const brain = require('brain.js');
const fs = require("fs");

let network = new brain.recurrent.LSTM();

// Load the trained network data from JSON file.
const networkState = JSON.parse(fs.readFileSync("network_state.json", "utf-8"));
network.fromJSON(networkState);

console.log(network.run('itching,sking_rash,nodal_skind_eruption,dischromic_patches')); 