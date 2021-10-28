import tickerData from "../tickerData"

const Stock = props => {

    const symbol = props.match.params.symbol

    const ticker = tickerData.find(ticker => ticker.symbol === symbol)

    return (
        <div className="stock">
            <h1>{ticker.name}</h1>
            <h2>{ticker.symbol}</h2>
            <p>Open: {ticker.open}</p>
            <p>Close: {ticker.lastPrice}</p>
            <p>High: {ticker.high}</p>
            <p>Low: {ticker.low}</p>
        </div>
    )
}

export default Stock