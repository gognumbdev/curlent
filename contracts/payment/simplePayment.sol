pragma solidity ^0.8.7;
//SPDX-License-Identifier: MIT

contract CryptoPayment {
    address payable curlentAddress;
    
    constructor() {
        curlentAddress = payable(msg.sender);
    }
    
    event TransferReceived(address _from,uint _amount);
    event TransferSent(address _from,address _destAddr,uint _amount);

    function transferCrypto(address payable _to) public payable {
        _to.transfer(msg.value*985/1000);
        curlentAddress.transfer(msg.value*15/1000);
        emit TransferReceived(msg.sender,msg.value);
        emit TransferSent(msg.sender,_to,msg.value);
    }

}