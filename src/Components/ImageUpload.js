// import React from 'react';
// import { useForm } from 'react-hook-form'

// const ImageUpload = () => {

//     const { register, handleSubmit } = useForm()

//     const Submit1 = (e) => {
//         console.log("this is data")
//     }

//     return (
//         <div>
//             <main>
//                 <div>
//                     <form
//                         onSubmit={(e) => Submit1(e.target.value)}>
//                         <input
//                             ref={register('file', { required: true })}
//                             type="file"
//                             name="picture"
//                         />
//                         <button
//                             type="submit"
//                         >
//                             Submit Picture
//                         </button>
//                     </form>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default ImageUpload;

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'


const ImageUpload = () => {
    
    const [artworks, setArtworks] = useState([])
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")

    const { register, } = useForm()

    const onFormSubmit = (event) => {
        event.preventDefault()
        const tempUrl = new FormData(event.target).get("state");
        setImage(image, tempUrl)
        console.log(image, "< State After")
        // event.preventDefault()
        // console.log(state, "state",event.target.value)
    }
    const onFormSubmitTitle = (event) => {
        event.preventDefault()
        const tempTitle = new FormData(event.target).get("state");
        setTitle(title, tempTitle)
        console.log(title, "< State After")
        // event.preventDefault()
        // console.log(state, "state",event.target.value)
    }


    const handleInputChange = (event) => {
        let eventData = event.target.value

        setImage([eventData])
    }

    const handleInputChangeTitle = (event) => {
        let eventData = event.target.value

        setTitle([eventData])
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
        console.log(options, "< These are options")
    }




  
    
    
    useEffect(() => {
        fetch('http://localhost:3000/artworks')
            .then(res => res.json())
            .then(artworkData => setArtworks(artworkData))
    }, [])

    console.log("this is artworks >>", artworks[22])
    console.log(` image  >> ${image} <<`)
    console.log(` title  >> ${title} <<`)

    return (
        <div>
            <main className="form-container">
                <div>
                    <form
                        // onSubmit={(e) => Submit1(e)}>
                        onSubmit={handleSubmitToBackEnd}>
                        {/* onSubmit={onFormSubmit}> */}
                        {/* onSubmit={handleSubmit(onFormSubmit, onErrors)}> */}

                        <input
                            innerRef={register("word")}
                            placeholder="title of image here"
                            type="text"
                            // value={state}
                            name="imageUrlTitle"
                            // value={title}
                            onChange={(event) => handleInputChangeTitle(event)}
                        />
                        <input
                            placeholder="image url here"
                            innerRef={register("word")}
                            type="url"
                            // value={state}
                            name="imageUrl"
                            // value={image}
                            onChange={(event) => handleInputChange(event)}
                        />
                        <input
                            type="submit"
                            value="Submit Picture">
                        </input>

                    </form>
                    <div className="uploaded-image-card">

                        
                        <p>{title}</p>
                        <img
                            className="uploaded-image"
                            src={image}
                            alt="ff"
                        ></img>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ImageUpload;

