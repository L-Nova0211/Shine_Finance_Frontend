import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";


const Web3Context = React.createContext();

export const useWeb3Context = () => {
    const web3Context = useContext(Web3Context);
    if (!web3Context) {
        throw new Error("useWeb3Context() can only be used inside of <Web3ContextProvider />, " + "please declare it at a higher level.");
    }
    const { onChainProvider } = web3Context;
    
    return useMemo(() => {
        return { ...onChainProvider };
    }, [web3Context]);
};

export const useWalletKey = () => {
    const { walletKey } = useWeb3Context();
    return walletKey;
};


export const Web3ContextProvider=({ children }) => {
    
    const [provider, setProvider] = useState(undefined);
    const [walletKey, setWalletKey] = useState(undefined);

    useEffect(() => {
        const provider = getProvider();
    
        if (provider) setProvider(provider);
        else setProvider(undefined);
      }, []);

    const getProvider = () => {
        if ("solana" in window) {
          // @ts-ignore
          const provider = window.solana;
          if (provider.isPhantom) return provider;
        }
    };

    /**
     * @description prompts user to connect wallet if it exists
     */
    const connectWallet = async () => {
        // @ts-ignore
        const { solana } = window;

        if (solana) {
        try {
            const response = await solana.connect();
            console.log('wallet account ', response.publicKey.toString());
            setWalletKey(response.publicKey.toString());
        } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
        }
        }
    };

    /**
     * @description disconnect Phantom wallet
     */
    const disconnectWallet = async () => {
        // @ts-ignore
        const { solana } = window;

        if (walletKey && solana) {
        await solana.disconnect();
        setWalletKey(undefined);
        }
    };    

    const onChainProvider = useMemo(
        () => ({
            connectWallet,
            disconnectWallet,
            provider,
            walletKey,
        }),
        [connectWallet, disconnectWallet, provider, walletKey],
    );
    //@ts-ignore
    return <Web3Context.Provider value={{ onChainProvider }}>{children}</Web3Context.Provider>;
};
