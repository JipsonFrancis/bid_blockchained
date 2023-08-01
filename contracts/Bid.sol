// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//creating smart contract
contract Bid {
    string[] private names;
    string[] private ipfshashes;

    function getName(uint256 index) public view returns (string memory, string memory) {
        require(index < names.length, "Invalid index");
        return (names[index], ipfshashes[index]);
    }

    function setData(string memory name, string memory ipfshash) public returns(bool){
        names.push(name);
        ipfshashes.push(ipfshash);
        return true;
    }
}