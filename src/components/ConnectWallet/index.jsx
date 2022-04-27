import { useWeb3Context } from "../../hooks";


function ConnectWallet(){

    const {connectWallet, disconnectWallet, provider, walletKey} = useWeb3Context();

    const onClickConnect = () => {
        if(provider){
            connectWallet();
        }
    }

    const onClickDisconnect = () => {
        disconnectWallet();
    }

    return(<>
        {
            !walletKey && (
                <button className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm" onClick={()=>onClickConnect()}>Connect Wallet</button>
            )
        }
        {
            provider && walletKey && (
                <div className="flex flex-col items-end">
                <div className="flex items-center">
                    <div className="p-1 bg-gray-800 rounded-full">
                        <img className='h-5 w-5 rounded-full' src="./phantom.png" />
                    </div>
                    <div className="text-gray-200 text-sm ml-1">
                        {String(walletKey).substring(0, 6) +"..." +String(walletKey).substring(38)}
                    </div>                    
                </div>
                <button className="text-gray-500 py-2 rounded-md text-xs hover:underline underline-offset-1" onClick={()=>onClickDisconnect()}>Disconnect</button>
                </div>                
            )
        }
    </>)

}

export default ConnectWallet;