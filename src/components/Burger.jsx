import React from 'react'

export const Burger = ({isOpen, setIsOpen}) => {
  function handleClick(){
    setIsOpen(!isOpen)
  }
  return (
    <div >
      {!isOpen && <div onClick={handleClick}>
        <img src='https://img.icons8.com/?size=35&id=82749&format=png&color=ffffff' loading="lazy"/>
        </div>}

        {isOpen && <div onClick={handleClick}>
        <img src='https://img.icons8.com/?size=35&id=9433&format=png&color=ffffff' loading="lazy"/>
        </div>}
    </div>
  )
}
