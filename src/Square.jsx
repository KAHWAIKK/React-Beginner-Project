import React from 'react'

const Square = ({colorValue,hexvalue,isDarkText,setIsDarkText}) => {
  return (
    <section 
        className='square'
        style={{
            backgroundColor: colorValue,
            color : isDarkText ? "white" : "black"
        }}
    >
        <p>{colorValue? colorValue : "Empty Value"}</p>
        <p>{hexvalue? hexvalue : null}</p>
    </section>
  )
}

Square.defaultProps = {
    colorValue : "Empty Color Value"
}

export default Square