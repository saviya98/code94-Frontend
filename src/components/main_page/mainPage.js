import { Button } from 'bootstrap'
import React from 'react'
import Header from '../header/header'
import ProductTable from '../productTable/productTable'
import './mainpage.css'

export default function mainPage() {
  return (
    <div className='container'>
      <Header value={"PRODUCTS"} isShow={false}/>
      <div className='table-alingmets'><ProductTable /></div>
      
    </div>
  )
}
