import ImageShow from "./ImageShow"
import './ImageList.css'

function ImageList({imagesList}) {

    const renderedImages = imagesList.map(image => <ImageShow
        key={image.id}
        desc={image.description}
        number={image.id}
        imgUrl={image.urls.small}
        imgAltDesc={image.alt_description}
    />)

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
}

export default ImageList