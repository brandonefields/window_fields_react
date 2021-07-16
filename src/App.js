import './App.css';
import Draw from './draw'
import Options from './Options';
import { store } from './store'
import { Provider } from 'react-redux'
import ImageUpload from './Components/ImageUpload';

function App() {

  return (
    <Provider store={ store }>
      <div className="App">
        <div className="main">
          <h1>Window Fields</h1>
          <Options className="options"></Options>
          <ImageUpload />
          <Draw className="draw" />
        </div>
      </div>
    </Provider>
  )
}
export default App;
