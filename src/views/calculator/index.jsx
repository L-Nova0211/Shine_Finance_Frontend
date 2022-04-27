import StakingSlider from "./stakingslider"

function Calculator(){

    return (
        <div className="calculator text-white mx-3 md:mx-6 xl:mx-40 xl:px-5  flex flex-col lg:flex-row">
            <div className="basis-1/2 mt-10">
                <div className="usd-value text-left text-2xl">Estimated Inputs</div>
                <div className="effective-card rounded-2xl px-8 py-8 mt-5">
                    <div className="grid grid-cols-2 grid-flow-rows gap-4">
                        <div className="px-5 py-2 mt-6 flex flex-col items-start">
                            <div className="market-title">SPHERE Amount</div>
                            <div className="shineInput-field mt-2">
                                <input className="input" type="number" />
                                <button className="btn shineInput-btn">MAX</button>
                            </div>
                        </div>
                        <div className="px-5 py-2 mt-6 flex flex-col items-start">
                            <div className="market-title">APY</div>
                            <div className="shineInput-field mt-2">
                                <input className="input" type="number" />
                                <button className="btn shineInput-btn">CURRENT</button>
                            </div>
                        </div>
                        <div className="px-5 py-2 mt-6 flex flex-col items-start">
                            <div className="market-title">SPHERE Price at Purchase($)</div>
                            <div className="shineInput-field mt-2">
                                <input className="input" type="number" />
                                <button className="btn shineInput-btn">CURRENT</button>
                            </div>
                        </div>
                        <div className="px-5 py-2 mt-6 flex flex-col items-start">
                            <div className="market-title">Future SPHERE Price($)</div>
                            <div className="shineInput-field mt-2">
                                <input className="input" type="number" />
                                <button className="btn shineInput-btn">CURRENT</button>
                            </div>
                        </div>
                    </div>                    
                    <div className="px-5 py-5 mt-6 flex flex-col items-start">
                        <div className="market-title">Staking Duration</div>
                        <div className="mt-4 w-full">
                            <StakingSlider />
                        </div>
                    </div>
                </div>                
            </div>
            <div className="basis-1/2 lg:ml-4 mt-10">
                <div className="usd-value text-left text-2xl">Estimated Returns</div>
                <div className="grid grid-cols-2 grid-flow-rows gap-4">
                    <div className="effective-card lg:h-52 rounded-2xl px-5 py-8 mt-5 flex flex-col justify-center">
                        <div className="market-title">YOUR INITIAL INVESTMENT</div>
                        <div className="usd-value text-2xl">0.0000</div>
                    </div>
                    <div className=" effective-card rounded-2xl px-5 py-8 mt-5 flex flex-col justify-center">
                        <div className="market-title">YOUR CURRENT WEALTH</div>
                        <div className="usd-value text-2xl">$0</div>
                    </div>
                    <div className=" effective-card lg:h-52 rounded-2xl px-5 py-8 mt-5 flex flex-col justify-center">
                        <div className="market-title">SPHERE REWARDS EST</div>
                        <div className="usd-value text-2xl">0 SPHERE</div>
                    </div>
                    <div className=" effective-card rounded-2xl px-5 py-8 mt-5 flex flex-col justify-center">
                        <div className="market-title">POTENTIAL RETURN</div>
                        <div className="usd-value text-2xl">0</div>
                    </div>
                </div>                
            </div>
            <div className="h-16"></div>
        </div>
    )
}

export default Calculator