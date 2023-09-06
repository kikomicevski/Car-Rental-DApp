import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkWalletConnection();
    addWalletListener();
  }, []);

  const checkWalletConnection = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log('Please install MetaMask');
    }
  };

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        const permissions = await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [
            {
              eth_accounts: {},
            },
          ],
        });

        if (permissions.length > 0) {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log('Please install MetaMask');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress('');
    setIsConnected(false);
  };

  const addWalletListener = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setWalletAddress('');
          setIsConnected(false);
        }
      });
    } else {
      /* MetaMask is not installed */
      setIsConnected(false);
      console.log('Please install MetaMask');
    }
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <div className="navbar__buttons">
          <button
                className="navbar__buttons__connect"
                onClick={isConnected ? disconnectWallet : connectWallet}
              >
                {isConnected ? (
                  <>
                    <span>Connected:</span>
                    {` ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`}
                  </>
                ) : (
                  'Connect Wallet'
                )}
              </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
