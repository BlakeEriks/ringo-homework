const Card = props => {
    return (
        <div className={'card ' + props.className}>
            <div className='card-header'>
                {props.title}
            </div>
            <div className='card-content'>
                {props.content}
            </div>
        </div>
    )
}

export default Card