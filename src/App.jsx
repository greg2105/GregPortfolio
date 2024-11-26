import './App.css';
import github from './assets/github.svg';
import mail from './assets/mail.svg';
import scroll from './assets/scrollDownTransparent.gif';
import programmer from './../public/programmer.webm';
import linkedIn from './assets/linkedIn.svg';

{/* Tech icons */}
import { JavascriptOriginal } from 'devicons-react';
import { Html5Original } from 'devicons-react';
import { Css3Plain } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { PythonOriginal } from 'devicons-react';
import { CplusplusPlain } from 'devicons-react';
import { GithubOriginal } from 'devicons-react';
import { AmazonwebservicesOriginalWordmark } from 'devicons-react';
import { LinuxOriginal } from 'devicons-react';

function App() {
  return (
    <>
      <div className="header">
          <div className="icons">
            <a href="https://github.com/greg2105" target="_blank" rel="noopener noreferrer">
              <img className="github" src={github} alt="GitHub" />
            </a>
            <a href="mailto:gregdorazio533@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className="mail" src={mail} alt="mail" />
            </a>
            <a href="https://www.linkedin.com/in/greg-dorazio/" target="_blank" rel="noopener noreferrer">
              <img className="linkedIn" src={linkedIn} alt="linkedIn" />
            </a>
          </div>
      </div>
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
            <div className="line-and-aboutMe">
              <div className="line"></div>            
              <div className="glass-pane">
                <p className="aboutMe">
                  I am a new graduate from Penn State with a degree in Computer Science. 
                  I am based in Yorktown Heights, New York
                </p>
              </div>
            </div>
          </div>
          <div class="tech-stack">
            <JavascriptOriginal size="500"/>
            <Html5Original />
            <Css3Plain />
            <ReactOriginal />
            <PythonOriginal />
            <CplusplusPlain />
            <AmazonwebservicesOriginalWordmark />
            <GithubOriginal />
            <LinuxOriginal />
          </div>
      </div>
      <div class="education">
          <h1>penn state</h1>
      </div>
      <div className="footer">
          <img className="scroll" src={scroll} alt="scroll" />
      </div>
    </>
  );
}

export default App
