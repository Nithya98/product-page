import React from 'react'
import { productsProps } from './mockData'

const ProductListing = () => {
  const props = productsProps
  return (
    <div>
      {props.items.map((item) => (
        <div className='prodct-listing__wrapper'>
          <div>{item.title} </div>
          <img src={item.images[0]} width='200' height='150' />
        </div>
      ))}
    </div>
  )
}

export default ProductListing
