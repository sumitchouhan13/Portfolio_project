import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import Particles from "react-particles-js"

function App() {
  return (
    <>
      <Particles
      className = "particles-canvas"
      params = {{
        particles : {
          number : {
            value : 30,
            density : {
              enable : true,
              value_area : 900,
            }
          },
          shape : {
            type : "star",
            stroke : {
              width : 6,
              color : "#f9ab00"
            }
          }
        }
      }} 
      />
      <NavBar />
      <Header />
    </>
  );
}

export default App;
