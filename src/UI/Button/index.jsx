import React from 'react'
import { Buttons } from './style.js';


const Button = ({icon, title}) => {
  return (
      <Buttons> {icon}{title}</Buttons>
  )
}

export default Button;