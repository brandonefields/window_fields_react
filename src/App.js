import './App.css';
import Draw from './draw'
import Options from './Options';
import { store } from './store'
import { Provider } from 'react-redux'
import ImageUpload from './Components/ImageUpload';
import ImageCard from './Components/ImageCard';

function App() {
  // const [colors,setColors] = useState(['black','white','blue'])

  // function handleColorChange(){
  //   setColors(...colors,)
  // }

  return (
    <Provider store={ store }>
      <div className="App">
        <div className="main">
          <h1>Window Fields</h1>
          <Options className="options"></Options>
          <ImageUpload />
          <Draw className="draw" />
          {/* <CanvasDraw /> */}
          {/* <div className="drawing-pad-container">
                <img src="https://unsplash.com/photos/0KE2UZWeV2Q" alt="note pad"/> */}
          {/* </div> */}
          <ImageCard />
        </div>
      </div>
    </Provider>


    /* <img 
    className="logo"
    src="https://github.com/brandonefields/window_fields_react/blob/main/Untitled_Artwork.png?raw=true" 
    alt="image of logo" 
  height="500" ></img> */

  );
}

export default App;
