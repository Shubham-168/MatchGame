const Matched = props => {
  const {imageDetails} = props
  const {imageUrl} = imageDetails

  return (
    <li>
      <img src={imageUrl} alt="match" />
    </li>
  )
}

export default Matched
