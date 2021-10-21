import React from 'react'
import "../styles/ProductReviewsCard.css"





const ProductReviewsCard = ({price,image,name,ind,review}) => {
    return (
        <div className="ProductReviewsCard">
        <img src={image} alt={ind} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>

        </div>
    )
}

export default ProductReviewsCard
