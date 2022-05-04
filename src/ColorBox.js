import React from 'react'

function ColorBox({colors}) {

    const styles={
        height:"75px",
        width:"150px",
        background:colors,
        margin:"10px 0px"
    }
  return (
    <div style={styles}></div>
  )
}

export default ColorBox