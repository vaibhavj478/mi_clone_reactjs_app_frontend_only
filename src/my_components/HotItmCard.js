import React from 'react'
import '../styles/HotItmCard.css'
const HotItmCard = ({price,image,name,ind}) => {
    return (
        <div className="HotItmCard">
<img src={image} alt={`${ind}product`} />
            <p>{name}</p>
            <span>{price}</span>

        </div>
    )
}

export default HotItmCard
