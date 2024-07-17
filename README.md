<h1 align="center">identiFi</h1>

<p align="center">
    <a href="https://www.youtube.com/watch?v=OpL5Q7Zc7qk" title="">🖥️ Video</a>
    .
    <a href="https://github.com/blocklinklabs/IdentiFi" title="">📂 Repo</a>
    ·
    <a href="https://github.com/blocklinklabs/IdentiFi/issues" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>
<a href="" title="Project Initiator">
    <img src="./public/prev.png" width="100%" alt="Project Initiator"/>
</a>

## Inspiration 💡

The current digital identity landscape is often fragmented and insecure, making it challenging for users to manage and verify their identities across different platforms. identiFi was inspired by the potential of blockchain technology to create a unified, secure, and verifiable digital identity solution that empowers users to manage their identities seamlessly.

## What it Does ⚙️

identiFi introduces a revolutionary approach to digital identity management by leveraging blockchain technology to ensure privacy, security, and authenticity:

- **Decentralized Identifiers (DIDs):** Create and manage unique DIDs on the blockchain.
- **Identity Verification:** Submit identity documents for verification by trusted third parties.
- **Credential Verification:** Verify the authenticity of credentials
- **User Profile Management:** Update personal details and manage credentials easily.
- **Privacy Controls:** Control who can access identity information and under what circumstances.
- **Security Measures:** Strong security measures including encryption and secure key management.
- **Social Media Integration:** Share your verified digital identity on various social media platforms.
- **Profile Editing:** Easily update and manage your digital identity profile.

## How We Built It 🛠️

identiFi is developed using the latest in blockchain and decentralized storage technology:

- **Blockchain Backend:** Developed using Solidity, smart contracts on Ethereum provide a secure and decentralized backend for identity management.
- **Monobean:** Utilized for batch transactions, ensuring efficient and cost-effective operations.
- **Chainlink VRF:** Used to generate unique DIDs for users.
- **IPFS:** All user images are stored on IPFS to ensure decentralized and secure storage.

### Prerequisite

- [Nodejs](https://nodejs.org/en// "Node") Installed
- [Git](https://git-scm.com/ "Git OFficial") Installed
- [npm](https://www.npmjs.com/ "npm ") Installed
- [Hardhat](https://hardhat.org/ "Hardhat ") Installed
- Metamask (or any other Ethereum wallet)
- Chainlink VRF setup
- IPFS setup

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/blocklinklabs/IdentiFi.git
cd identifi
```

2. Install Dependencies

```bash
npm install
```

3. Compile the Contracts

```bash
npx hardhat compile
```

4. Deploy the Contracts

```bash
npx hardhat run scripts/deploy.js --network yourNetwork
```

5. Run the Development Server

```bash
npm start
```

6. Open the App

Navigate to `http://localhost:3000` in your web browser.

**🎇 You are Ready to Go!**

## Configuration

To deploy to a test or main network, update the configurations located in `hardhat.config.js` to use a private key and, optionally, deploy to a private RPC like Infura.

```javascript
require("@nomiclabs/hardhat-waffle");
const { ethers } = require("ethers");
const privateKey = wallet.privateKey;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    zkEVMCardonaTestnet: {
      url: "https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.24",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
};
```

## Smart Contract Overview

The main contract, `IdentiFi`, manages user profiles, DIDs, and credentials.

### Key Functions

- **createUser:** Creates a new user profile and requests a new DID using Chainlink VRF.
- **editUser:** Edits an existing user profile.
- **getUserByUsername:** Retrieves user information by username.
- **getUserByAddress:** Retrieves user information by address.
- **addJob:** Adds a job to the user's profile.
- **getJobs:** Retrieves jobs associated with a user.
- **setVisibility:** Sets visibility preferences for user profile information.
- **getVisibility:** Gets visibility preferences for user profile information.
- **batchCreateUsers:** Batch creates multiple user profiles using Monobean.

## Storing Images on IPFS

User images are uploaded and stored on IPFS. This ensures that images are stored in a decentralized manner, enhancing security and accessibility.

## Contributing

We welcome contributions to identiFi! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
