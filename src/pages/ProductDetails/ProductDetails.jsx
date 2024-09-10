import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Axios needs to be imported
import './ProductDetails.css';
import { getProduct } from '../../api/fakestoreProd';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Destructure `id` from `useParams`

    // Function to fetch the product details
    async function downloadProduct(productId) {
        try {
            const response = await axios.get(getProduct(productId));
            console.log( response.data) // Assuming getProduct returns the correct URL
            setProduct(response.data); // Set the product data in state
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }

    // Fetch the product when the component mounts
    useEffect(() => {
      
            downloadProduct(id);
        
    }, [id]); // Add `id` as a dependency to `useEffect`

    return (
        <>
            {product && (
                <div className="container">
                    <div className="row">
                        <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                            <div className="product-img d-flex">
                                <img src={product.image} alt={product.title} id="product-img" /> {/* Dynamically set the product image */}
                            </div>

                            <div className="product-details-box d-flex flex-column">
                                <div id="productDetails">
                                    <div className="product-name" id="product-name">{product.title}</div> {/* Set product name */}
                                    <div className="product-price fw-bold" id="product-price">${product.price}</div> {/* Set product price */}
                                    <div className="product-description">
                                        <div className="product-description-title fw-bold">Description</div>
                                        <div className="product-description-data" id="product-description-data">
                                            {product.description} {/* Set product description */}
                                        </div>
                                    </div>
                                </div>

                                <div className="product-details-action btn btn-primary text-decoration-none">Add to cart</div>
                                <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                                    Go to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductDetails;
