import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [OpenMenu, setOpenMenu] = useState(true);
  return (
    <div className="app">
      <Topbar open={OpenMenu} setOpen={setOpenMenu} />
      <Menu open={OpenMenu} setOpen={setOpenMenu} />
      <div className="sets">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
