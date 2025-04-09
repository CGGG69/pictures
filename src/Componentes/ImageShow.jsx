const ImageShow = ({Image}) => {

  return (
    <div>
      <image src = {image.urls.small} alt={image.alt_description} />
    </div>
  )
}
export default ImageShow