import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef();
  console.log(textRef);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/JustTheTwoOfUs.png" alt="My Wife and I" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Danny Rivera</h1>
          <h3>Full Stack  <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/MikadoYellowDown.png" alt="down arrow" />
        </a>
      </div>
    </div>
  )
}
