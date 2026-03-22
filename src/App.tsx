import "./App.css";
import ScrambledText from "./components/ReactBits/ScrambledText";
import NavDock from "./components/navdock";
import Background from "./components/background";
//Esto es basicamente la pagina de inicio

const phrases = [
  "Choose the desired game...",
  "V2 Design",
  "Why am I doing this...",
  "Giving free items since 2024",
  "Please use the dock!",
];

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        margin: 0,
      }}
    >
      <Background />
      <div className="apptitle z-2 absolute w-[100vw]">
        <ScrambledText>
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </ScrambledText>
      </div>
      <NavDock />
    </div>
  );
}

export default App;
