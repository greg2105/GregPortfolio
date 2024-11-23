import './App.css';
import github from './assets/github.svg';
import mail from './assets/mail.svg';
import scroll from './assets/scrollDownTransparent.gif';
import programmer from './../public/programmer.webm';
import linkedIn from './assets/linkedIn.svg';

function App() {
  return (
    <>
      <div class='Introduction'>
        <div class='Header'>
          <div class='icons'>
            <img class='github' src={github} alt="github" />
            <img class='mail' src={mail} alt="mail" />
            <img class='linkedIn' src={linkedIn} alt="linkedIn" />
          </div>
        </div>
        <div class='Title'>
          <h1 class='Text'>Hello, my name is Greg Dorazio</h1>
        </div>
        <div class='programmer-container'>
          <video class='programmer' autoPlay loop muted>
            <source src={programmer} type="video/webm"/>
            Your browser can't display this really cool webm video
          </video>
        <div class='line-and-text'>
          <div class='glass-pane'>
            <p class='text'> I am a new graduate from Penn State with a degree in Computer Science. I am based in Yorktown Heights, New York  </p>
          </div>
          <div class='line'></div>
        </div>
      </div>
        {/* <div class='Body'>
          <h2>Webdev, ML</h2>
          <h3>Yorktown Heights, NY</h3>
        </div> */}
      </div>
      <div class='Footer'>
          <img class='scroll' src={scroll} alt="scroll"/>
      </div>
      {/* <div class='Education'>
        <h1>penn state</h1>
      </div> 
      <div class='Projects'>
        <h1>inside the lumen</h1>
      </div> */}
    </>
  )
}

export default App
