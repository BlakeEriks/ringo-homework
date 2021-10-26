import Receipt from "./Receipt"

const Receipts = ({receipts, handlePay}) => {
    return (
        <div className='receipt-list'>
            {receipts.map( (receipt, index) => <Receipt key={index} receipt={receipt}/> )}
            <ReceiptAdd />
        </div>
    )
}

export default Receipts