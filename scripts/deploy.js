const hre = require("hardhat");
const filesys = require("fs");
const { ethers } = require("hardhat");

async function main() {
  const Meme = await ethers.getContractFactory("MemeForest");
  const meme = await Meme.deploy();
  await meme.deployed();
  
  console.log("Memeforest deployed to:", meme.address);

  filesys.writeFileSync('./constant.js', `export const Memeforest address = "${meme.address}"`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });