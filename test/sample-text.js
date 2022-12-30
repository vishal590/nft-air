const {expect} = require("chai");
const {ethers} = require("hardhat");

// ethers is module

describe("Greeter", function() {
    it("Should  create two nft, like one, star, fetch all, fetch starred and fetch mine", async function(){
        const Nft = await ethers.getContractFactory("MemeForest");
        const nft = await Nft.deploy();
        await nft.deployed();

        let today = new Date().toISOString().slice(0, 10);
        console.log(today);

        const [_, buyerAddress, thirdone] = await ethers.getSigners();
        const createMember = await nft.connect(buyerAddress).CreateMembers("first Kid", today);
        const createMembers2 = await nft.connect(thirdone).CreateMembers("second kid", today);
        const fetchMembers = await nft.connect(buyerAddress).fetchMembers();
        console.log(fetchMembers);

        const addr = await buyerAddress.getAddress();
        const addr2 = await thirdone.getAddress();
        const fectme = await nft.GetMemberByAddr(addr);
        console.log(fectme);

        let another = new Date().toISOString().slice(0, 10);
        await nft.connect(buyerAddress).CreateMemeItems("MemeLinkInfo1", addr, another, "jpeg", true);
        await nft.connect(thirdone).CreateMemeItems("MemeLinkInfo2",addr2, another, "mp4", false);

        const Allmeme = await nft.fetchAllMemes();
        console.log(Allmeme);

        await nft.connect(thirdone).LikeMeme("1");
        console.log("meme like");

        await nft.connect(buyerAddress).StarMeme("2");

        const FetchStarredMemes = await nft.connect(buyerAddress).fetchMyStarredMemes(addr);
        console.log(FetchStarredMemes);
        console.log("fetching starred Memes");

        const first = await nft.connect(buyerAddress).fetchMyMeme(addr);
        console.log(first,"fetch first meme");

        const second = await nft.connect(thirdone).fetchMyMeme(addr2);
        console.log(second);
        console.log("fetch second meme");

    });
});