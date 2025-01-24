const { ethers } = require("hardhat");

async function main() {
  // Replace with the deployed contract address
  const contractAddress = "0xA9F8FeF0B3DF9159F1443427dAa79210fCEB009C";

  // Replace with the name of your contract
  const ContractName = "Storage";

  // Get the contract instance using ethers.js
  const contract = await ethers.getContractAt(ContractName, contractAddress);

  // Example: Call a read-only function (e.g., `value` getter)
  const currentValue = await contract.retrieve();
  console.log("Current value:", currentValue.toString());

  // Example: Call a state-changing function (e.g., `setValue`)
  const tx = await contract.store(42);
  console.log("Transaction hash:", tx.hash);

  // Wait for the transaction to be mined
  const receipt = await tx.wait();
  console.log("Transaction mined in block:", receipt.blockNumber);

  // Check the updated value
  const updatedValue = await contract.retrieve();
  console.log("Updated value:", updatedValue.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
