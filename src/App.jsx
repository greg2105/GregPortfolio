import './App.css';

{/* Header icons */}
import linkedIn from './assets/header-icons/linkedIn.svg';
import github from './assets/header-icons/github.svg';
import mail from './assets/header-icons/mail.svg';

{/* Tech icons */}
import aws from './assets/tech-stack/aws.svg'
import cplusplus from './assets/tech-stack/c-plusplus.svg'
import css3 from './assets/tech-stack/css-3.svg'
import githubicon from './assets/tech-stack/github-icon.svg'
import html5 from './assets/tech-stack/html-5.svg'
import javascript from './assets/tech-stack/javascript.svg'
import linuxtux from './assets/tech-stack/linux-tux.svg'
import python from './assets/tech-stack/python.svg'
import react from './assets/tech-stack/react.svg'


{/* Misc icons */}
import scroll from './assets/misc/scrollDownTransparent.gif';
import programmer from './../public/programmer.webm';




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
            <div className="about-me">   
                <span class="i-am-a"> I am a... </span>      
                <span class="developer"> Developer </span>
                <span class="graduate"> Graduate student </span>
              </div>
            </div>
          <div class="tech-stack">
            <img className="js" src={javascript} alt="js" />
            <img className="hmtl" src={html5} alt="GitHub" />
            <img className="css" src={css3} alt="GitHub" />
            <img className="react" src={react} alt="GitHub" />
            <img className="python" src={python} alt="GitHub" />
            <img className="cplusplus" src={cplusplus} alt="GitHub" />
            <img className="aws" src={aws} alt="GitHub" />
            <img className="github" src={githubicon} alt="GitHub" />
            <img className="linux" src={linuxtux} alt="GitHub" />
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
