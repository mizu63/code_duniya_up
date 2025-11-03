import React, { Children } from 'react'

function Container({children,className}) {
  return (
    <div className={`w-[1180px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
