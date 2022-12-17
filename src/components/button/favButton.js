import React from 'react'
import './button.css'

export default function favButton() {
    const onSubmit = () =>{
        window.location = "/favourite-products"
    }
  return (
    <button type='button' className='favbutton' onClick={()=>onSubmit()}>
        <i className='icon-start'></i>
    </button>
  )
}
