const Thumbnail = props => {
  const {thumbnailDetails, onClickThumbnail} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClick = () => {
    onClickThumbnail(id)
  }

  return (
    <li>
      <button type="button" onClick={onClick}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
