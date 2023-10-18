const Tab = props => {
  const {tabDetails, onClickTabItem} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default Tab
