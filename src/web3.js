import Web3 from 'web3';

const isManaged = typeof(window.web3) === "object";
console.log('isManaged: ', isManaged);
const web3 = isManaged ? window.web3 : new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

export default web3;
