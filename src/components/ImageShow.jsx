function ImageShow({desc, number, imgUrl, imgAltDesc}) {
    return (
        <div>
            <img src={imgUrl} alt={imgAltDesc} />
        </div>
    )
}

export default ImageShow