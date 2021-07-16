import React, { useState, useEffect } from 'react';




const ImageCard = () => {
    
    const [artworks, setArtworks] = useState([])
    //const [cereal_rating, setCereal_rating] = useState(0)
    
    
    useEffect(() => {
        fetch('http://localhost:3000/artworks')
            .then(res => res.json())
            .then(artworkData => setArtworks(artworkData))
    }, [])

    console.log("this is artworks >>", artworks[22])
    return (
        <div className="uploaded-image-card">
            <p>"title of submitted url"</p>
            <img 
            src=""
            alt=""
            ></img>
        </div>
    );
}

export default ImageCard;
