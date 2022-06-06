import './myJourney.scss'

export default function MyJourney() {
  return (
    <div className='myJourney' id='journey'>
      <div className="left">
        <h1>My Journey</h1>
        <div className="container">
          <h2>MITxPro Full Stack Developers Course</h2>
          <h3>We are using the MERN stack (MongoDB, Express.js, React.js, Node.js)</h3>
          <div className="item1">
            <h4>Module 1</h4>
            <a href="https://whatwg.org/" target="_blank" rel="noopener noreferrer"><img src="assets/html5icon.png" alt="HTML 5 Logo" /></a>
            <a href="https://w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer"><img src="assets/css3icon.png" alt="CSS 3 Logo" /></a>
            <a href="https://javascript.com" target="_blank" rel="noopener noreferrer"><img src="assets/javascriptLogo.png" alt="JavaScript Logo" /></a>
          </div>
          <div className="item2">
            <h4>Module 2</h4>
            <a href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer"><img src="assets/reactLogo.png" alt="React Logo" /></a>
          </div>
        </div>
        <div className="right">
          <div className="container">
            <div className="item3">
              <h4>Module 3</h4>
              <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer"><img src="assets/mongodbLogo.png" alt="MongoDB Logo" /></a>
              <a href="https://www.expressjs.com" target="_blank" rel="noopener noreferrer"><img src="assets/express.png" alt="BadBank Project" /></a>
              <a href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer"><img src="assets/reactLogo.png" alt="React Logo" /></a>
              <a href="https://www.nodejs.org" target="_blank" rel="noopener noreferrer"><img src="assets/nodeLogo.png" alt="BadBank Project" /></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
