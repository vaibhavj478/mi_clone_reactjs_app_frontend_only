import React, { useState, useEffect } from 'react'
import NavCard from './NavCard.js'

import "../styles/NavOptions.css"



const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, accessories, audio }) => {

    const [miPhoneToggle, setMiPhoneToggle] = useState(false)
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false)
    const [tvToggle, setTvToggle] = useState(false)
    const [laptopToggle, setLaptopToggle] = useState(false)
    const [fitnessToggle, setFitnessToggle] = useState(false)
    const [homeToggle, setHomeToggle] = useState(false)
    const [accessoriesToggle, setAccessoriesToggle] = useState(false)
    const [audioToggle, setAudioToggle] = useState(false)


    useEffect(() => {

        if (window.location.pathname === "/miphones")
            return setMiPhoneToggle(true)

        if (window.location.pathname === "/redmiphones")
            return setRedmiPhoneToggle(true)

        if (window.location.pathname === "/tv")
            return setTvToggle(true)

        if (window.location.pathname === "/laptop")
            return setLaptopToggle(true)

        if (window.location.pathname === "/fitness")
            return setFitnessToggle(true)

        if (window.location.pathname === "/home")
            return setHomeToggle(true)

        if (window.location.pathname === "/accessories")
            return setAccessoriesToggle(true)

        if (window.location.pathname === "/audio")
            return setAudioToggle(true)


    }, [])


    return (
        <div className="navOptions">
            {miPhoneToggle ? miPhones.map((itm, ind) => (
                <NavCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
            )) : null}

            {redmiPhoneToggle ? redmiPhones.map((itm, ind) => (
                <NavCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
            )) : null}

            {tvToggle ? tv.map((itm, ind) => (
                <NavCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
            )) : null}

            {laptopToggle ? laptop.map((itm, ind) => (
                <NavCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
            )) : null}

            {fitnessToggle ? fitnessAndLifeStyle.map((itm, ind) => (
                <NavCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
            )) : null}

            {homeToggle ? home.map((itm, ind) => (
                <NavCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
            )) : null}

            {accessoriesToggle ? accessories.map((itm, ind) => (
                <NavCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
            )) : null}

            {audioToggle ? audio.map((itm, ind) => (
                <NavCard key={itm.image} name={itm.name} price={itm.price} image={itm.image} ind={ind} />
            )) : null}

        </div>

    )
}

export default NavOptions
