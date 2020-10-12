import React from 'react'
import './Messages.css'


const Message = (props) => {
  return (
    <p className={props.propClass}>{props.message}</p>
  )
}


export default Message