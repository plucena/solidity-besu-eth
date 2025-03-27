// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// SHOULD INCLUDE A WHITE LIST OF ALLOWED WALLET ADDRESS TO BID, LEFT TO MAKE CODE CLEAR

contract ReverseAuction {
    address public owner;
    address private lowestBidder;
    uint private lowestBid;
    mapping(address => uint) public allBids; // Map to store all bids
    bool public ended;
    string public itemName;
    string public itemDescription;
    string public businessAddress;
    string public country;

    event RegistryClosed(address winner, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    constructor(
        string memory _itemName,
        string memory _itemDescription,
        string memory _businessAddress,
        string memory _country
    ) {
        owner = msg.sender; // Set the contract creator as the owner
        itemName = _itemName;
        itemDescription = _itemDescription;
        businessAddress = _businessAddress;
        country = _country;
        lowestBid = type(uint).max; // Initialize to maximum uint value
    }

    function registerBid(uint _bidAmount) public {
        require(!ended, "Registry has closed.");
        require(_bidAmount < lowestBid, "There already is a lower bid.");

        lowestBidder = msg.sender;
        lowestBid = _bidAmount;
        allBids[msg.sender] = _bidAmount;
    }

    function closeRegistry() public onlyOwner {
        require(!ended, "Registry has already been closed.");
        ended = true;
        emit RegistryClosed(lowestBidder, lowestBid);
    }

    function getLowestBid() external view onlyOwner returns (uint) {
        return lowestBid;
    }

    function getLowestBidder() external view onlyOwner returns (address) {
        return lowestBidder;
    }

    function getBid(address bidder) public view returns (uint) {
        return allBids[bidder];
    }

    function getItemName() public view returns (string memory) {
        return itemName;
    }

    function getItemDescription() public view returns (string memory) {
        return itemDescription;
    }

    function getBusinessAddress() public view returns (string memory) {
        return businessAddress;
    }

    function getCountry() public view returns (string memory) {
        return country;
    }
}
