import logo from './parrish_logo.svg';
import './App.css';
import AudioPlayer from "./AudioPlayer";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} alt="parrish_logo" height={50} className="responsive"/>
          </header>
          <div>
              <AudioPlayer/>
          </div>
      </div>
  );
}

export default App;
