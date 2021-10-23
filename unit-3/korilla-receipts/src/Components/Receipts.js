import Receipt from "./Receipt"

const Receipts = ({receipts}) => {
    return (
        <div className='receipt-list'>
            {receipts.map( (receipt, index) => <Receipt key={index} receipt={receipt}/> )}
        </div>
    )
}

export default Receipts