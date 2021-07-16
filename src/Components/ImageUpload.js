import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import sketchBook from '../Images/sketch_book.png'


const ImageUpload = () => {

    const [artworks, setArtworks] = useState([])
    const [image, setImage] = useState("http://thevirtualinstructor.com/blog/wp-content/uploads/2012/04/sketchbookideas-150x150.jpg")
    const [title, setTitle] = useState("")

    const { register, } = useForm()

    // const onFormSubmit = (event) => {
    //     event.preventDefault()
    //     const tempUrl = new FormData(event.target).get("state");
    //     setImage(image, tempUrl)
    //     console.log(image, "< State After")
    // }

    // const onFormSubmitTitle = (event) => {
    //     event.preventDefault()
    //     const tempTitle = new FormData(event.target).get("state");
    //     setTitle(title, tempTitle)
    //     console.log(title, "< State After")
    // }

    const handleInputChange = (event) => {
        let eventData = event.target.value
        setImage(eventData)
    }

    const handleInputChangeTitle = (event) => {
        let eventData = event.target.value
        setTitle(eventData)
    }

    const options = {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            title,
            image
        })
    }

    const handleSubmitToBackEnd = event => {
        event.preventDefault()
        fetch("http://localhost:3000/artworks", options)
        .then(res => res.json())
        .then((data) => setArtworks([...artworks, data]))
        console.log(options, "< These are options")
    }

    useEffect(() => {
        fetch('http://localhost:3000/artworks')
            .then(res => res.json())
            .then(artworkData => setArtworks(artworkData))
    }, [])

    const removeArtwork = (clickedArtwork) => {
        let newArtworks = artworks.filter(
            (aw) => aw.id != clickedArtwork
        );
        setArtworks(newArtworks)
        fetch(`http://localhost:3000/artworks/${clickedArtwork}`,{ method: "DELETE"});
        console.log(newArtworks, clickedArtwork)
    }

    const displayArtworks = () => {
        return artworks.map((aw) => {
            return (
                <div className="wrapper">
                    <nav className="little-nav">
                        <a href={artworks.id}>
                        <p className="ptags-for-nav-images">"{aw.title}"</p>
                            <img
                                key={aw.id}
                                alt={aw.title}
                                className="little-nav__img"
                                src={aw.image}>
                            </img>
                        <button
                        key={aw.id}
                        className="remove-artwork-button"
                        onClick={() => removeArtwork(aw.id)}
                        >Remove Artwork <span>{"  "} &#10060;</span>{" "}</button>
                        </a>
                    </nav>
                </div>
        )})
    }

    // console.log("this is artworks >>", artworks[22])
    // console.log(` image  >> ${image} <<`)
    // console.log(` title  >>  <<`,title)

    

    return (
        <div className="top-div-image-upload">
            <main className="form-container">
                <div>
                    <label className="label-submit"><strong>• Submit your Artwork</strong></label>
                    <form
                        onSubmit={handleSubmitToBackEnd}>
                        <input
                            innerRef={register("word")}
                            placeholder="title of image here"
                            type="text"
                            name="imageUrlTitle"
                            onChange={(event) => handleInputChangeTitle(event)}
                        />
                        <input
                            placeholder="image url here"
                            innerRef={register("word")}
                            type="url"
                            name="imageUrl"
                            onChange={(event) => handleInputChange(event)}
                        />
                        <input
                            className="button-input"
                            type="submit"
                            value="Submit Picture">
                        </input>

                    </form>
                    <div className="uploaded-image-card">
                        <p>{title}</p>
                        <img
                            className="uploaded-image"
                            src={image}
                            alt="uploaded artwork"
                        ></img>
                    </div>
                </div>
            </main>
            <div>{displayArtworks()}</div>
        </div>
    );
}

export default ImageUpload;

