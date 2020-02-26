import React from 'react'

function renderImages(url, vars = {}) {
    /**
     * Create image container
     */
    let background_position
    if ("backgroundPosition" in vars) {
        background_position = vars["backgroundPosition"]
    } else {
        background_position = "50%"
    }
    const divStyle2 = {
        // color: 'blue',
        backgroundImage: 'url(' + url + ')',
        backgroundSize: 'cover',
        height: '18rem',
        backgroundPosition: background_position,
        boxShadow: "3px 3px 5px 3px rgba(0,0,0,0.3)",
        borderRadius: " 5px",
    };

    return (
        <>
            <div style={divStyle2}></div>
        </>
    )
}

export default renderImages