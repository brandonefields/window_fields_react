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

import React, { useState } from 'react';
import { useForm } from 'react-hook-form'


const ImageUpload = () => {

    const [state, setState] = useState([])

    const { register, handleSubmit } = useForm()

    const onFormSubmit = (event) => {
        event.preventDefault()
        console.log(state, "state")
    }

    


    return (
        <div>
            <main>
                <div>
                    <form
                        // onSubmit={(e) => Submit1(e)}>
                        onSubmit={onFormSubmit}>
                        {/* onSubmit={handleSubmit(onFormSubmit, onErrors)}> */}
                            
                        
                            <input
                                innerRef={register("word")}
                                type="text"
                                name="pictureForUpload"
                            />
                            <input
                                type="submit"
                                value="Submit Picture">
                            </input>
                    
                    </form>
                </div>
            </main>
        </div>
    );
}

export default ImageUpload;

