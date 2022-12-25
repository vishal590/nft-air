//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;


import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MemeForest is ReentrancyGuard{
    using Counters for Counters.Counter;
    Counters.Counter public NumOfAllMemes;
    Counters.Counter public NumOfAllMembers;

    struct MemeMembers{
        string Name;
        address MemeberAddress;
        uint MyId;
        uint MyMemes;
        uint MyStarredMemes;
        uint MyDeletedMemes;
        string Datejoined;        
    }

    struct MemeFiles{
        string Memeinfo;
        address Owner;
        uint filedId;
        bool starred;
        uint Stars;
        uint Likes;
        string DateOfCreation;
        string FileType;
        bool IsDownloadable;
    }

    mapping(uint => MemeMembers) private IdMembers;
    mapping(address => bool) private alreadyAMember;
    mapping(address => mapping(uint => bool)) private DidyouStar;
    mapping(address => mapping(uint => bool)) private DidyouLike;
    mapping(uint => MemeFiles) private IdMemeFiles;
    mapping(uint => address) private StarredMemeFiles;

    uint public NumberOfUploads;

    event Memberjoined(
        uint256 MemberId,
        string MemberName,
        string Datejoined,
        address MemberAddress,
        uint256 MemberTotalMemes,
        uint256 MemberStarredMemes,
        uint256 MemeberDeletedMemes,
        uint256 MemberTotalLikes
    );

    event CreateMeme(
        uint256 MemeId,
        string MemeInfo,
        address MemeCreator,
        bool IsMemeStarred,
        uint256 MemeStars,
        uint256 MemeLikes,
        string DateOfCreation,
        string Filetype,
        bool IsDownloadable,
        uint Membernum,
        uint NewNumberMemberMemes
    );

    event StarredMeme(
        uint256 MemeId,
        uint256 NewStarNo,
        uint256 CreatorId,
        address CreatorAddress,
        uint256 CreatorStarredMemes
    );

    event UnStarringMeme(
        uint256 MemeId,
        uint256 NewStarNo,
        uint256 CreatorId,
        address CreatorAddress,
        uint256 CreatorStarredMemes
    );

    event LikingMeme(
        uint256 MemeId,
        uint256 NewLikesNo,
        uint256 CreatorId,
        address liker
    );

    event UnLikingMeme(
        uint256 MemeId,
        uint256 NewLikesNo,
        uint256 CreatorId,
        address Unliker
    );

    function CreateMembers(string memory _name, string memory _date) public nonReentrant{
        require(alreadyAMember[msg.sender] == false, "You are already a member");

        NumOfAllMembers.increment();
        uint currentMemberId = NumOfAllMembers.current();
    }

}
