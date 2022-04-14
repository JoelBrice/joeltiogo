import './App.css';
import Nav from './Navbar';
import photo from './assets/images/photo.jpg';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='main'>
        <div className='row'>
          <div className='col'>

            <h1> Welcome to my Personal website!</h1>
          </div>
          <div className='col'>
            <img src={photo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
