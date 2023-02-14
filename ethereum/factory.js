import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xA0a1CD767bE23415034B29B61D6B3944585774e4"
);

export default instance;
