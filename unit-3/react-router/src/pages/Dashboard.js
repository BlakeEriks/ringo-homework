import { Link } from "react-router-dom"
import tickerData from "../tickerData"

const Dashboard = props => {

    const tickers = tickerData.map( (ticker,index) => {

        // let change = 

        return (
            <Link to={`/stocks/${ticker.symbol}`} key={index}> 
                <h2>
                    {ticker.name} 
                    <span className={ticker.change > 0 ? 'green' : 'red'}>
                    {' (' + ticker.symbol + ' '} 
                    {ticker.change > 0 ? '+' : ''}{ticker.change.toPrecision(2) + '%'}
                    {')'}
                    </span>
                </h2>
            </Link>
        )
    }
    )
    
    return (
        <div className="tickers">
            {tickers}
        </div>
    )
}

export default Dashboard