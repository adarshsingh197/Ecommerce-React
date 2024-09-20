import React, { useEffect, useState } from 'react'
import './ProductList.css'
import ProductBox from '../../components/ProductBox/ProductBox'
import ProductImage from  '../../assets/react.svg'
import FilterProduct from '../../components/FilterProduct/FilterProduct'
import { allproductsapi, getallproductsbyCategory } from '../../api/fakestoreProd'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
const ProductList = () => {
  const [productsList,setProductsList] = useState([]);
  const [query,setQuery]= useSearchParams();
  const fetchProdcts = async(category)=>{
    const downloadUrl = category? getallproductsbyCategory(category):allproductsapi;
    const product = await axios.get(downloadUrl);
    const response = await product.data;
    setProductsList(response);
  }
  useEffect(()=>{
        
        fetchProdcts(query.get("category"));
        
  },[query.get("category")])
  return (
    <div className='container'>
        <div className='row'>
           <h2 className='product-list-title'>All Products</h2>
           <div className='product-list-wrapper d-flex flex-row'>
            <FilterProduct/>

            <div className='product-list-box' id='productList'>
              {productsList&&productsList.map((x)=>{
                return(
                 <ProductBox productImage={x.image} name={x.title} price={x.price} id={x.id} />
                )

              })}
           
            </div>
           </div>
        </div>
    </div>
  )
}

export default ProductList
