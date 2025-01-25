import { ethers } from "ethers";

// Besu network RPC URL
const BESU_RPC_URL = "http://localhost:8545";

// Contract details
const contractAddress = "0xA9F8FeF0B3DF9159F1443427dAa79210fCEB009C";
const abi = [
  {
    "inputs": [],
    "name": "retrieve",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "store",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

async function main() {
  // Connect to the Besu network
  const provider = new ethers.JsonRpcProvider(BESU_RPC_URL);

  // Wallet private key (replace with your private key)
  const privateKey = "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f";
  const wallet = new ethers.Wallet(privateKey, provider);

  // Create a contract instance
  const storageContract = new ethers.Contract(contractAddress, abi, wallet);

  // Retrieve the stored value
  const storedValue = await storageContract.retrieve();
  console.log("Stored Value:", storedValue.toString());

  // Store a new value (e.g., 42)
  const newValue = 43;
  const tx = await storageContract.store(newValue);
  console.log("Transaction sent:", tx.hash);

  // Wait for the transaction to be mined
  const receipt = await tx.wait();
  console.log("Transaction mined:", receipt.transactionHash);

  // Retrieve the updated value
  const updatedValue = await storageContract.retrieve();
  console.log("Updated Value:", updatedValue.toString());
}

main().catch((error) => {
  console.error("Error:", error);
});
