import React from 'react'
import './button.css'

export default function button({value, onSubmit}) {
  return (
    <button type='button' onClick={onSubmit} className='button'>
        <p>{value}</p>
    </button>
  )
}
