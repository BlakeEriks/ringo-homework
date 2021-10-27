import './App.css';
import {useState} from 'react'
import GetGiphy from './Components/GetGiphy';
import Giphy from './Components/Giphy';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY

function App() {

  const [giphy, setGiphy] = useState(null)

  const getGiphy = async () => {
    const response = await (await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`)).json()
    setGiphy(response.data.embed_url)
  }

  return (
    <div className="App">
      <GetGiphy getGiphy={getGiphy}/>
      <Giphy url={giphy}/>
    </div>
  );
}

export default App;
