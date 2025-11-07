import React, { Children } from 'react'

function Container({children,className}) {
  return (
    <div className={`max-w-[1180px] mx-auto p-2.5 ${className}`}>
      {children}
    </div>
  )
}

export default Container
