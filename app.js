const express = require('express');
const Web3 = require('web3');
const MyContract = require("./build/contracts/Bid.json");
const contractABI = MyContract.abi;
const contractAddress = '0x58FE2Dae748bA1ad8268ccfaaAc45011d20db85e'; // Enter your contract address here
const rpcEndpoint = 'http://127.0.0.1:8545'; // Enter your RPC server endpoint URL here

const app = express();
const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.use(express.json());

app.get('/bid', async (req, res) => {
const number = await contract.methods.getName(8).call();
res.json({ number });
});

app.post('/bid', async (req, res) => {
const { number } = req.body;
const accounts = await web3.eth.getAccounts();

const company_name = web3.utils.stringToHex("E");
const hexed_ipfs = web3.utils.stringToHex("QmWfmsFDQi6F5xGTs8K24yasH3L87dTawhjCK75Rm2Yey7EE")
const result = await contract.methods.setData("f",hexed_ipfs).send({ from: accounts[0], gas: 2000000 });
console.log(result)
res.json({ message: 'number set successfully' });
});

app.listen(2000, () => {
console.log('Server listening on port 2000');
});
