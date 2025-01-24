// Import Hardhat runtime environment
const { ethers } = require("hardhat");

async function main() {
    // Get the deployer's account from Hardhat
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory for the Storage contract
    const Storage = await ethers.getContractFactory("Storage");

    // Deploy the contract
    const storage = await Storage.deploy(gasLimit: 3000000, gasPrice: 1000000000);});
    console.log("Storage contract deployed to ")
    console.log(storage);

    // Store a value using the contract's store function
     let tx = await storage.store(42);
     await tx.wait(); // Wait for the transaction to be mined
     console.log("Stored value 42");

    // Retrieve the stored value
    const storedValue = await storage.retrieve();
    console.log("Stored value is:", storedValue.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
