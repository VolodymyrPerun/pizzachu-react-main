import React from 'react'
//////////////////////////////////////////////////

const Tab = React.memo(({ handleClick, label, className }) => {
  return (
    <>
      <button className={className} onClick={handleClick}>{label}</button>
    </>
  )
})

export default Tab
