import React from 'react'
import VideosCard from './VideosCard.js'
import "../styles/Videos.css"


const Videos = ({videos}) => {
    return (
        <div className="Videos">
        {videos.map((itm,ind)=>(
                <VideosCard name={itm.name} image={itm.image} ind={ind} key={itm.image} />
            ))
        }
            
        </div>
    )
}

export default Videos
