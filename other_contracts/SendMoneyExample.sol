pragma solidity >=0.7.0 <0.9.0;


contract MappingsStructExample {

 // hashmap of address, balance 
 mapping(address => uint) public balanceReceived;

 function sendMoney() public payable {
 balanceReceived[msg.sender] += msg.value;
 }
 
 function withdrawAllMoney(address payable _to) public {
 uint balanceToSend = balanceReceived[msg.sender];
 balanceReceived[msg.sender] = 0;
 _to.transfer(balanceToSend);
 }
 
 function withdrawMoney(address payable _to, uint _amount) public {
 require(_amount <= balanceReceived[msg.sender], "not enough funds");
 balanceReceived[msg.sender] -= _amount;
 _to.transfer(_amount);
 }

 function getBalance() public view returns(uint) {
 return address(this).balance;
 }
 
}
