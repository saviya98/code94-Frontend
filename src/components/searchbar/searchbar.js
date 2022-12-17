import React from 'react'
import './searchbar.css'

export default function searchbar() {
  return (
    <div>
        <div className='search-bar'>
            <input type='text' placeholder="Search for products" />
            <button type='submit'><img src='../../assets/saerch.png'/>Search</button>
        </div>
    </div>
  )
}
