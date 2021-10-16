const Card = props => {
    return (
        <div className={'card ' + props.className}>
            <div className='card-header'>
                <h2>    
                    {props.title}
                </h2>
            </div>
            <div className='card-content'>
                {props.content}
            </div>
        </div>
    )
}

export default Card