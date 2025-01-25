import { ethers } from "ethers";

const besuRpcUrl = "http://localhost:8545"; 

async function connectToBesu() {
  try {
    // Create a provider for the Besu node
    const provider = new ethers.JsonRpcProvider(besuRpcUrl);

    // Fetch network details
    const network = await provider.getNetwork();
    console.log("Connected to network:", network);

    // Fetch the current block number
    const blockNumber = await provider.getBlockNumber();
    console.log("Current block number:", blockNumber);

    // Example: Fetch balance of an account
    const accountAddress = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
    const balance = await provider.getBalance(accountAddress);
    console.log(`Balance of ${accountAddress}:`, ethers.formatEther(balance), "ETH");
  } catch (error) {
    console.error("Error connecting to Besu:", error);
  }
}

connectToBesu();