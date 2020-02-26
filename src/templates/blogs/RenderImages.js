import React from 'react'

function renderImages(url) {
    /**
     * Create image container
     */
    const divStyle2 = {
        // color: 'blue',
        backgroundImage: 'url(' + url + ')',
        backgroundSize: 'cover',
        height: '18rem',
        backgroundPosition: "50%",
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