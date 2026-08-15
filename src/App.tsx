import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Index from "./components/index";
import PanelLeft from "./components/PanelLeft";
import PanelRight from "./components/PanelRight";

function App() {
  return (
    <Index>
      <PanelLeft/>
      <PanelRight/>
    </Index>
  );
}

export default App;
