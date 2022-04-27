import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useWeb3Context } from "../../../hooks";
import 'react-circular-progressbar/dist/styles.css';
import './index.css';

function Portfolio() {

    const {provider, walletKey} = useWeb3Context();

    const data = [
        {
            name: '3/21 1AM',
            uv: 0,
            pv: 2400,
            amt: 0,
        },
        {
            name: '3/24 1AM',
            uv: 10,
            pv: 1398,
            amt: 10,
        },
        {
            name: '3/27 1AM',
            uv: 20,
            pv: 9800,
            amt: 20,
        },
        {
            name: '4/1 1AM',
            uv: 25,
            pv: 3908,
            amt: 25,
        },
        {
            name: '4/4 1AM',
            uv: 24,
            pv: 4800,
            amt: 24,
        },
        {
            name: '4/7 1AM',
            uv: 26,
            pv: 3800,
            amt: 26,
        },
        {
            name: '4/10 1AM',
            uv: 27,
            pv: 4300,
            amt: 27,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 30,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 31,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 30,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 31,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 32,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 34,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 37,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 40,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 45,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 56,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 60,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 70,
        },
        {
            name: '4/13 1AM',
            uv: 30,
            pv: 4300,
            amt: 79,
        },
    ];


    return (
        <>
            <div className="text-white effective-card rounded-2xl md:mx-6 xl:mx-40 flex flex-col md:flex-row mt-10 px-8 py-8">
                <div className="basis-1/4 flex flex-col items-center">
                    <div className='portfolio-title text-center'>
                        PORTFOLIO
                    </div>
                    <img className='h-16 w-16 rounded-full mt-2' src="./phantom.png" />
                    {
                        provider&&walletKey&&(
                            <div className='text-green-400 text-sm mt-2'>
                                {String(walletKey).substring(0, 6) +"..." +String(walletKey).substring(38)}
                            </div>
                        )
                    }

                    {
                        !walletKey&&(
                            <div className='text-blue-500 text-sm mt-2'>
                                Please Connect Wallet
                            </div>
                        )
                    }
                    
                </div>
                <div className="basis-1/2 flex flex-col mt-10 md:mt-0">
                    <div className="flex">
                        <div className="basis-1/2 text-center md:text-left">
                            <div className='portfolio-title'>
                                HOLDINGS
                            </div>
                            <div className='usd-value text-4xl'>
                                $0.00
                            </div>
                            <div className='flex flex-row items-center justify-center md:justify-start text-gray-400'>
                                <img className="h-5 w-5" src='./symbol_logo.png' />&nbsp;
                                0 SHINE
                            </div>
                        </div>
                        <div className="basis-1/2 text-center md:text-left">
                            <div className='portfolio-title'>
                                DAILY EARNINGS
                            </div>
                            <div className='usd-value text-4xl'>
                                $0.00
                            </div>
                            <div className='flex flex-row items-center justify-center md:justify-start text-gray-400'>
                                <img className="h-5 w-5" src='./symbol_logo.png' />&nbsp;
                                0 SHINE
                            </div>
                        </div>
                    </div>
                    <div className='mt-6' style={{ width: '100%', height: 150 }}>
                        <ResponsiveContainer>
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >

                                <XAxis dataKey="name" />
                                <Tooltip />
                                <Area type="monotone" dataKey="amt" stroke="white" fill="#270c4f" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div></div>
                </div>
                <div className="basis-1/4 mt-10 md:mt-0">
                    <div className='flex justify-center'>
                        <div style={{ width: 150, height: 150 }}>
                            <CircularProgressbarWithChildren 
                                value={66} 
                                styles={{
                                    // Customize the root svg element
                                    root: {},
                                    // Customize the path, i.e. the "completed progress"
                                    path: {
                                      // Path color
                                      stroke: `#cb017f`,
                                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                      strokeLinecap: 'round',
                                      // Customize transition animation
                                      transition: 'stroke-dashoffset 0.5s ease 0s',
                                      // Rotate the path
                                      
                                      transformOrigin: 'center center',
                                    },
                                    // Customize the circle behind the path, i.e. the "total progress"
                                    trail: {
                                      // Trail color
                                      stroke: '#fff',
                                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                      strokeLinecap: 'butt',
                                      // Rotate the trail
                                      transform: 'rotate(0.25turn)',
                                      transformOrigin: 'center center',
                                    },
                                    
                                  }}

                            >
                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                    <span>REBASES</span><br />
                                    <span>EVERY 30</span><br />
                                    <span>MINUTES</span><br />
                                    <strong className='text-xl'>00:00</strong>
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                    <div className='portfolio-title mt-4'>
                        NEXT REWARD
                    </div>
                    <div className='usd-value text-2xl'>
                        $0.00
                    </div>
                    <div className='text-gray-400'>
                        0 SHINE
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Portfolio;