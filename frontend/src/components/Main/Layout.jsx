import React from 'react'

function Layout({display}) {
  return (
    <div className={(display ? "block":"hidden")}>Layout</div>
  )
}

export default Layout