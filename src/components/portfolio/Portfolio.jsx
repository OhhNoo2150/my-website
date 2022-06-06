import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { useEffect, useState } from "react"
import { featuredPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Eyes Project");
  // const [data, setData] = useState([]);
  const list = [
    {
      id: "Module 1 project",
      title: "Eyes Project",
    },
    {
      id: "Module 1 project",
      title: "Bus Tracker Project",
    },
    {
      id: "Module 1 project",
      title: "PacMen Factory Project",
    },
    {
      id: "Module 2 project",
      title: "Bad Bank App Project",
    },
  ];

  // useEffect(() => {

  //   switch (selected) {
  //     case "Eyes Project":
  //       setData(featuredPortfolio);
  //       break;
  //     case "Bus Tracker Project":
  //       setData(featuredPortfolio);
  //       break;
  //     case "PacMen Factory Project":
  //       setData(featuredPortfolio);
  //       break;
  //     case "Bad Bank App Project":
  //       setData(featuredPortfolio);
  //       break;
  //     default:
  //       setData(featuredPortfolio);
  //   }
  // }, [selected]);

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.title}
            setSelected={setSelected}
            id={item.title}
          />
        ))}
      </ul>
      <div className="container">
        <h3>Module 1 Projects</h3>
        <div className="item">
          <h3>Eyes Project</h3>
          <a href="https://ohhnoo2150.github.io/Eyes"><img src="assets/eyes.gif" alt="Eyes Project" rel="noreferrer" /></a>
        </div>
        <div className="item">
          <h3>Bus Tracker Project</h3>
          <a href="https://ohhnoo2150.github.io/Bus_Tracker" target="_blank" rel="noreferrer"><img src="assets/bus.gif" alt="Bus Tracker Project" /></a>
        </div>
        <div className="item">
          <h3>PacMen Factory Project</h3>
          <a href="https://ohhnoo2150.github.io/PacMen" target="_blank" rel="noreferrer"><img src="assets/pacman.gif" alt="PacMen Factory Project" /></a>
        </div>
        <h3>Modules 2 and 3 Project</h3>
        <div className="item">
          <h3>Bad Bank App Project</h3>
          <a href="https://ohhnoo2150.github.io/BadBank" target="_blank" rel="noreferrer"><img src="assets/BadBankLogo4.gif" alt="BadBank Project" /></a>
        </div>
      </div>
    </div >


  )
}
