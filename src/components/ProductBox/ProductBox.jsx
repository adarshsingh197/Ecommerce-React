import React, { useEffect, useState } from 'react'
import './ProductBox.css'
import { Link } from 'react-router-dom'
const ProductBox = ({productImage,name,price,id}) => {

  return (
    <Link to={`/products/${id}`}  className="product-item text-decoration-none d-inline-block">
                            <div className="product-img">
                                <img src={productImage} alt=""/>
                            </div>
                            <div className="product-name text-center">{name}</div>
                            <div className="product-price text-center">&#8377; {price}</div>
                        </Link>

  )
}

export default ProductBox