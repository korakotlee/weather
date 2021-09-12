import React, { useState } from 'react';

function City({update}) {
    const [city, setCity] = useState('Tokyo');
    return (
        <div>
            City
            <input type="text" value={city} placeholder="City" 
                onChange={e => setCity(e.target.value)}/>
            <button onClick={e => update(city)}>Submit</button>
        </div>
    )
}

export default City
