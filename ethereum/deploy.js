// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const Web3 = require("web3");
// const compiledFactory = require("./build/CampaignFactory.json");

// const provider = new HDWalletProvider(
//   "arch twice negative excess share animal guess drastic bubble inch say sister",
//   // remember to change this to your own phrase!
//   "https://goerli.infura.io/v3/dda56dbd329d4c449b44e4b70761ea7d"
//   // remember to change this to your own endpoint!
// );
// const web3 = new Web3(provider);

// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();

//   console.log("Attempting to deploy from account", accounts[0]);

//   const result = await new web3.eth.Contract(compiledFactory.abi)
//     .deploy({ data: compiledFactory.evm.bytecode.object })
//     .send({ gas: "1000000", from: accounts[0] });

//   console.log("Contract deployed to", result.options.address);
//   provider.engine.stop();
// };
// deploy();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "arch twice negative excess share animal guess drastic bubble inch say sister",
  // remember to change this to your own phrase!
  "https://goerli.infura.io/v3/dda56dbd329d4c449b44e4b70761ea7d"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1400000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
