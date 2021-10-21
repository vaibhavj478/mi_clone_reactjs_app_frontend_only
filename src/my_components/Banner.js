import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




const Banner = ({Banner}) => {
    return (
    <Carousel fade>

        {Banner.end.map((itm,ind)=>(
             <Carousel.Item key={itm.image} id="banner" interval={1000} keyboard={true} >
             <img
               className="d-block w-100"
               id="bannerImage"
               src={itm.image}
               alt={`${ind} banner`}
             />
             <Carousel.Caption>
                 <h3>{itm.name}</h3>
                 <p>{itm.description}</p>
                 <p>{itm.source}</p>
                 <u>read more..</u>
             </Carousel.Caption>

           </Carousel.Item>
        ))

        }
        </Carousel>
    )
}

export default Banner
