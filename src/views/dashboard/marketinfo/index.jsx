function MarketInfo(){

    return(
        <>
            <div className="text-white md:mx-6 xl:mx-40 flex flex-col md:flex-row">
                <div className="basis-3/4  mt-10">
                    <div className="effective-card rounded-2xl flex flex-col md:flex-row px-5 py-8">
                        <div className="basis-1/3 text-center">
                            <div className="market-title">
                                SHINE PRICE
                            </div>               
                            <div className="usd-value text-4xl">
                                $0.0750
                            </div>             
                        </div>
                        <div className="basis-1/3 text-center">
                            <div className="market-title">
                                MARKET CAP
                            </div>
                            <div className="usd-value text-4xl">
                                $175.28M
                            </div>        
                        </div>
                        <div className="basis-1/3 text-center">
                            <div className="market-title">
                                DAILY ROI
                            </div>
                            <div className="usd-value text-4xl">
                                1.91%
                            </div>        
                            <div className="flex lg:px-16 mt-5">
                                <div className="basis-1/2 text-left">
                                    Next 30m:
                                </div>
                                <div className="basis-1/2 text-right">
                                    0.04%
                                </div>
                            </div>
                            <div className="flex lg:px-16">
                                <div className="basis-1/2 text-left">
                                    5-day:
                                </div>
                                <div className="basis-1/2 text-right">
                                    9.92%
                                </div>
                            </div>
                            <div className="flex lg:px-16">
                                <div className="basis-1/2 text-left">
                                    Annual:
                                </div>
                                <div className="basis-1/2 text-right">
                                    99,900%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="effective-card rounded-2xl basis-1/2 flex text-center p-5  mt-10">
                            <div className="basis-1/2">
                                <div className="market-title">
                                    TREASURY BALANCE
                                </div>
                                <div className="usd-value text-2xl">
                                    $15.64M
                                </div>      
                            </div>
                            <div className="basis-1/2">
                                <div className="market-title">
                                    TODAY'S TREASURY GAINS
                                </div>
                                <div className="usd-value text-2xl">
                                    $660,325.66
                                </div>      
                            </div>
                        </div>
                        <div className="effective-card rounded-2xl  basis-1/2 flex text-center md:ml-5 p-5  mt-10">
                            <div className="basis-1/2">
                                <div className="market-title">
                                    TOTAL WALLETS
                                </div>
                                <div className="usd-value text-2xl">
                                    22,861
                                </div>      
                            </div>
                            <div className="basis-1/2">
                                <div className="market-title">
                                    DYSON INDEX
                                </div>
                                <div className="usd-value text-2xl">
                                    1.6031X
                                </div>      
                            </div>
                        </div>                        
                    </div>
                    <div className="effective-card rounded-2xl mt-10 px-5 py-5">
                        <div className="market-title">
                            TOTAL BURNED TO DATE
                        </div>
                        <div className="usd-value text-4xl">
                            $345,904.63
                        </div>   
                    </div>                    
                </div>
                <div className=" basis-1/4 md:pl-5">
                    <div className="effective-card rounded-2xl px-5 py-5  mt-10  text-left">
                        <div className="market-title">
                            BUY TAX
                        </div>
                        <div className="tax-value text-fuchsia-600 text-lg underline-val">
                            13%
                        </div>
                        <div className="market-title mt-2">
                            SELL TAX
                        </div>
                        <div className="tax-value text-fuchsia-600 text-lg underline-val">
                            20%
                        </div>
                        <div className="market-title mt-2">
                            TRANSFER TAX
                        </div>
                        <div className="tax-value text-fuchsia-600 text-lg underline-val">
                            13%
                        </div>
                        <div className="market-title mt-2">
                            MAX TOKENS PER BUY/SELL
                        </div>
                        <div className="tax-value text-fuchsia-600 text-lg">
                            869.23B / 1.50M
                        </div>
                    </div>
                    <div className="effective-card rounded-2xl px-5 py-5 mt-10 text-left">
                        <div className="market-title">
                            YOUR CURRENT TAX BRACKET
                        </div>
                        <div className="tax-value text-fuchsia-600 text-lg underline-val">
                            Sell Tier (+0%)
                        </div>
                        <div className="mt-6">
                            Total Sell Tax =20%
                        </div>
                        <div>
                            Total Transfer Tax =13%
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-16"></div>
        </>
    )
}

export default MarketInfo;