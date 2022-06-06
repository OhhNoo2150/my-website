import React from 'react'
import ProfileImage from '../img/TheTwoOfUs.jpg'
import ModuleImage1 from '../img/html-css-js-logo.png'
import ModuleImage2 from '../img/ReactTransparentLogo.png'
import ModuleImage3 from '../img/MERNTransparentLogo.png'

const Home = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={ProfileImage} alt="My Wife and I" />
            <div className="card-body">
                <h5 className="card-title">Welcome to my Portfolio</h5>
                <p className="card-text">Currently I am attending MIT xPro's Full-Stack Web Developer using MEAN stack (MongoDB, Express.JS, React, Node.JS).
                    The more I dive into learning programming concepts, the more I feel drawn to the Penetration Testing sector.</p>
                <p>Module 1</p>
                <img src={ModuleImage1} alt="HTML5, CSS, JavaScript logos" />
                <h6>We worked with these languages to build stunning and functional webpages.</h6>

                <p>Module 2</p>
                <img src={ModuleImage2} alt="React.js logos" />
                <h6>We have learned how to utilize React.js frameworks to create Single Page applications.</h6>
                <p>Module 3</p>
                <img src={ModuleImage3} alt="MERN stack logos" />
                <h6>We will be learning how to utilize a MERN stack which is MongoDB, Express.js, React.js, and Node.js. </h6>

            </div>
        </div>
    );
};

export default Home