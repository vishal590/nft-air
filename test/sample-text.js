const {expect} = require("chai");
const {ethers} = require("hardhat");

// ethers is module

describe("Greeter", function() {
    it("Should create two members, create two nft, like one, star, fetch all, fetch starred and fetch mine", async function(){
        const Nft = await ethers.getContractFactory("MemeForest");
        const nft = await Nft.deploy();
        await nft.deployed();

        let today = new Date().toISOString().slice(0, 10);
        console.log(today);

    });
});