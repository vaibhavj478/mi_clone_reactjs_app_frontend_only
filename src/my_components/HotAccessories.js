import React from 'react'
import HotItmCard from './HotItmCard.js'
import '../styles/HotAccessories.css'


const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, mobileAccessories, mobileAccessoriesCover, home, homeCover, lifestyle, lifestyleCover }) => {
    return (
        <div className="HotAccessories">
            <div>
                <img src={musicCover || smartDeviceCover || mobileAccessoriesCover || homeCover || lifestyleCover} alt="Cover" />
            </div>

            <div>
                {
                    music && music.map((itm, ind) => (
                        <HotItmCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
                    ))}


                {smartDevice && smartDevice.map((itm, ind) => (
                    <HotItmCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
                ))
                }


                {mobileAccessories && mobileAccessories.map((itm, ind) => (
                    <HotItmCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
                ))
                }

                {home && home.map((itm, ind) => (
                    <HotItmCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
                ))
                }


                {lifestyle && lifestyle.map((itm, ind) => (
                    <HotItmCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
                ))
                }

                <HotItmCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>

            </div>
        </div>
    )
}

export default HotAccessories
