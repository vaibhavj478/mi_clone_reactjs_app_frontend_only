import React from 'react'
import ProductReviewsCard from './ProductreviewsCard.js'
import "../styles/ProductReviews.css"



const ProductReviews = ({ProductReviews}) => {
    return (
        <div className="ProductReviews">
            
        {ProductReviews.map((itm,ind)=>(
            <ProductReviewsCard image={itm.image} price={itm.price} name={itm.name} review={itm.review} ind={ind} key={itm.image}/>
        ))
        }


        </div>
    )
}

export default ProductReviews
