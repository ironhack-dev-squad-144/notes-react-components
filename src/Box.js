import React from "react"



export default function Box({color,children}) {
  let style = {
    backgroundColor: color,
    height: 100,
    width: 100,
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}