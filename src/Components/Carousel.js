import React from 'react';

const Carousel = () => {
    const displayArtworks = () => {
        return displayArtworks.map((aw) => {
            return console.log(aw)
        })
    }

    return (
        <div>
            <div className="wrapper">
                <nav className="lil-nav"></nav>
                <div className="gallery">{displayArtworks()}</div>
            </div>
        </div>
    );
}

export default Carousel;
