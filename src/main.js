const {BlockChain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('fbe5dfc3c0ee7a5c1dd4f2dd6ef81f67942dd4f8eb8d9fe0f04ba1514336c0fc', 'hex');
const myWalletAddress = myKey.getPublic('hex');



let CloudCoin = new BlockChain();


const tx1 = new Transaction(myWalletAddress, 'publickeyfromotherguy', 100);
tx1.signTransaction(myKey);
CloudCoin.addTransaction(tx1);





console.log('\n Starting the Miner..');
CloudCoin.minePendingTransactions(myWalletAddress);

console.log('balance of stan is',CloudCoin.GetBalanceOfAddress(myWalletAddress));


console.log('balance of adress1 is',CloudCoin.GetBalanceOfAddress('publickeyfromotherguy') );

console.log(JSON.stringify(CloudCoin.chain, null, 4))
console.log('Is chain valid?', CloudCoin.isChainValid());