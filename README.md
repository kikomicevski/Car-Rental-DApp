# Car Rental Dapp

Car Rental Dapp is a decentralized application (Dapp) built on Ethereum using Solidity and React. It allows users to book cars and make payments using cryptocurrency.

<div style="text-align:center;">
  <img src="/src/images/Car-Rental-Dapp.png" alt="site">
</div>

Car Rental Dapp provides an easy and decentralized way for users to book cars for rental. Users can select a car type, pick-up and drop-off locations, and choose the rental duration. Payments are made using cryptocurrency via the Ethereum blockchain.


- User-friendly interface for booking cars.
- Integration with the Ethereum blockchain for secure and transparent payments.
- Selection of car type, pick-up, and drop-off locations.
- Validation and error handling for booking and payment processes.
- Smart contract to manage car rentals, payments, and user balances.


Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- [MetaMask](https://metamask.io/) extension installed in your browser.
- Ethereum wallet with testnet Ether for testing (e.g., Ropsten or Rinkeby).

To set up the development environment and run the Minted AI DApp locally, follow these steps:

1. Clone the GitHub repository:

   ```shell
   git clone https://github.com/kikomicevski/Minted-AI-DApp.git

2. Install the dependencies:

    ```shell
    npm install

3. Set up environment variables:

    Create a .env file in the project root directory.

    Add your own environment variables which should look like this:
    ```
    
    API_URL = "https://eth-sepolia.g.alchemy.com/v2/dcxTgaFqasd1w8dsf56WnfKOMy-hghhgVvo"
    PRIVATE_KEY = "a84ffbb7610822fasd15w51f89sdf3cv2f7d2ecbcf8fd344f0d06c27103346c46"


    //Make sure to replace them with the actual values.
4. Deploy the Smart Contract:

    ```shell
    npx hardhat run scripts/deploy.js --network sepolia

5. Start the development server:

    ```shell
    npm run start

The DApp will be accessible at http://localhost:3000.