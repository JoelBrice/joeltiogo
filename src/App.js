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
            <br />
            <h3> I am the CEO & Lead engineer at
              <a href="https://www.expotechindustries.com"> Expotech Industries</a></h3>
            <p>
              <p> I have a very diverse background going from Electrical Engineering to Software Engineering. This background gives me an excellent perspective on solving complex problems.
                What if I told you that I have studied for 3 degrees first in <em> Physics </em> in Cameroon where I am from and I had to leave to South Africa to pursue my Engineering studies just after my first year in Physics;
                I got to South Africa and because I do not tolerate sitting doing nothing, I started a long distance degree ( with the University of South Africa) in <b>Applied Mathematics & computer science. </b> before pursuing a bachelor of Technology in <b> Electrical Engineering</b></p>
              <p> Since you are here, you can check out my <b><a className='cv' href='https://docs.google.com/document/d/1BsLlXRjWIyOuWyiV160slcSjBAcXMZRVJi0LagYobzU/edit?usp=sharing'>Curriculum vitae</a> to learn more about my career history</b></p>
              If my profile interests you for any opportunity, you can <a className='mail' href='mailto:joel.tiogo@xpotechindustries.com'>email me</a>
            </p>
          </div>
          <div className='col'>
            <img src={photo} className="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
