import MarketInfo from "./marketinfo"
import Portfolio from "./portfolio"

function Dashboard(){

    return (
        <div className="mx-5">            
            <Portfolio />
            <MarketInfo />
        </div>
    )
}

export default Dashboard