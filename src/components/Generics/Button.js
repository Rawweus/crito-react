import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, type, url }) => {

  const getButtonClassName = () => {
    switch(type) {
      case 'yellow':
        return 'btn-yellow'
      case 'black':
        return 'btn-black'
      default:
        return 'btn-transparent'
    }
  }

  return (
    <Link to={url} className={getButtonClassName()}>
      {text}
      <i className="fa-solid fa-square-arrow-up-right"></i>
    </Link>
  )
}

export default Button