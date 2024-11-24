import './App.css';
import github from './assets/github.svg';
import mail from './assets/mail.svg';
import scroll from './assets/scrollDownTransparent.gif';
import programmer from './../public/programmer.webm';
import linkedIn from './assets/linkedIn.svg';

function App() {
  return (
    <>
      <header className="header">
          <div className="icons">
            <img className="github" src={github} alt="github" />
            <img className="mail" src={mail} alt="mail" />
            <img className="linkedIn" src={linkedIn} alt="linkedIn" />
          </div>
      </header>
        {/* Everything in the introduction should take up the full page. 
        The next full page will be 
        another div that takes up the full page. (besides header and footer*/}
      <div className="introduction">
          <div className="title">
            <h1 className="text">Hello, my name is Greg Dorazio</h1>
          </div>
          <div class="webm-text-split">
          <div className="programmer-container">
            <video className="programmer" autoPlay loop muted>
              <source src={programmer} type="video/webm" />
              Your browser can't display this really cool webm video
            </video>
          </div>
          <div className="line-and-text">
            <div className="line"></div>            
            <div className="glass-pane">
              <p className="text">
                I am a new graduate from Penn State with a degree in Computer Science. 
                I am based in Yorktown Heights, New York
              </p>
            </div>
          </div>
          </div>
      </div>
      {/* was going to use footer for this, but the viewport
      height keeps bumping it out of the page */}
      <div className="footer">
          <img className="scroll" src={scroll} alt="scroll" />
      </div>
    </>
  );
}

export default App
