import React from 'react'

function Weather({city, temp}) {
    return (
        <div>
            {city} Temperature is {temp} &deg; F
        </div>
    )
}

export default Weather
