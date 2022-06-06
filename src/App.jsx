import Topbar from './components/topbar/Topbar.jsx';
import Intro from './components/intro/Intro.jsx';
import Portfolio from './components/portfolio/Portfolio';
import MyJourney from './components/myJourney/MyJourney';
import PuertoRico from './components/puertoRico/PuertoRico';
import Contact from './components/contact/Contact';
import './app.scss'
import { useState } from 'react';
import Menu from './components/menu/Menu.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <MyJourney />
        <PuertoRico />
        <Contact />
      </div>
    </div>
  );
}

export default App;