import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";

import { HardhatUserConfig, task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

// hre is provided on the global scope.  We cannot import it here or in any file we import since we
// cannot load the hre while doing configuration.
declare global {
  var hre: HardhatRuntimeEnvironment;
}

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.7.3",
};

export default config;