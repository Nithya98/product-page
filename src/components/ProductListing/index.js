import React from 'react'
import { productsProps } from './mockData'
import './style.scss'
import { calculateDiscountPrice } from '../../utils'

const ProductListing = () => {
  const props = productsProps

  const Buttons = ({ buttonName, extraclassName }) => {
    return (
      <div className={`product-listing__items--buttons-${extraclassName}`}>
        {buttonName}
      </div>
    )
  }

  return (
    <div className='product-listing__wrapper'>
      {props.items.map((item) => (
        <div className='product-listing__items'>
          <img
            src={item.thumbnail}
            alt={item.title}
            className='product-listing__items--image'
          />
          <div className='product-listing__items--details'>
            <div className='product-listing__items--title'>{item.title} </div>
            <div className='product-listing__items--description'>
              {item.description}
            </div>
            <div className='product-listing__items--offer-price'>
              Offer Price:{' '}
              <span>
                ₹
                {item.price -
                  calculateDiscountPrice(item.price, item.discountPercentage)}
              </span>
            </div>
            <div className='product-listing__items--price'>
              M.R.P: <span>₹{item.price}</span>
            </div>
            <div className='product-listing__items--discount-price'>
              Your Save: {item.discountPercentage}% (₹
              {calculateDiscountPrice(item.price, item.discountPercentage)})
            </div>
            <div className='product-listing__items--buttons'>
              <Buttons buttonName={item.rating} extraclassName={'ratings'} />
              <Buttons buttonName={item.brand} extraclassName={'brand'} />
              <Buttons buttonName={item.category} extraclassName={'category'} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductListing
