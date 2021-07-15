import React from 'react';
import { useForm } from 'react-hook-form'

const ImageUpload = () => {

    const { register, handleSubmit } = useForm()

    const Submit1 = (e) => {
        console.log("this is data")
    }

    return (
        <div>
            <main>
                <div>
                    <form
                        onSubmit={(e) => Submit1(e.target.value)}>
                        <input
                            ref={register('file', { required: true })}
                            type="file"
                            name="picture"
                        />
                        <button
                            type="submit"
                        >
                            Submit Picture
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default ImageUpload;

// import React from 'react';
// import { useForm } from 'react-hook-form'

// const ImageUpload = () => {

//     const { register, handleSubmit } = useForm()

//     const onSubmit = (data) => {
//         console.log("this is data",data)
//     }

//     return (
//         <div>
//             <main>
//                 <div>
//                     <form
//                         // onSubmit={(e) => Submit1(e)}>
//                         onSubmit={handleSubmit(onSubmit)}>
//                         <input
//                             ref={register}
//                             type="text"
//                             name="picture"
//                         />
//                         <input
//                             type="submit"
//                             value="Submit Picture"
//                         >

//                         </input>
//                     </form>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default ImageUpload;

