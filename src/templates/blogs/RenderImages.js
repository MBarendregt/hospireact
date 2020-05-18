import React from 'react'

function renderImages(url, vars = {}) {
    /**
     * Create image container
     */
    const divStyle2 = {
        // color: 'blue',
        backgroundImage: 'url(' + url + ')',
        height: "0",
        paddingBottom: "75%",
        backgroundPosition: 'center center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <>
            <div style={divStyle2}></div>
        </>
    )
}

export default renderImages