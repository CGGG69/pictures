import ImageShow from "./ImageShow"
import './Imagelist.css'


const Imagelist = ({images}) => {
  const renderImage = images.map ((image) => {
    return <ImageShow key = {image.id} image = {image}/>
  })
  return (
    <div className="image-list">
      {renderImage}
    </div>
  )
}

export default Imagelist