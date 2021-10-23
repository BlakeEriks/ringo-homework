const Receipt = ({receipt, handlePay}) => {
    return (
        <div className='receipt-item'>
            <h2 className='receipt-person'>{receipt.person}</h2>
            <h3>{receipt.order.main}</h3>
            <div className='receipt-details'>
                <div>Protein - {receipt.order.protein}</div>
                <div>Rice - {receipt.order.rice}</div>
                <div>Sauce - {receipt.order.sauce}</div>
                <div>Drink - {receipt.order.drink}</div>
                <div>Cost - {receipt.order.cost}</div>
                <div>Paid - {receipt.paid ? 'Yes' : 'No'}</div>
                <button>Pay Now</button>
            </div>
        </div>
    )
}

export default Receipt