const Giphy = ({url}) => {
    return (
        <div className="giphy-container">
            <iframe src={url} width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
    )
}

export default Giphy