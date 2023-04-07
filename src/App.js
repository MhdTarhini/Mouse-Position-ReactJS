import "./App.css";
import PanelMouseLogger from "./PanelMouseLogger";
import PointMouseLogger from "./PointMouseLogger";

function App() {
  return (
    <div className="App">
      <header className="Header">Mouse Position</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
