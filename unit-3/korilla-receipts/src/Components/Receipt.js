const Receipt = ({receipt}) => {
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
                <div>Paid - {receipt.paid}</div>
            </div>
        </div>
    )
}

export default Receipt