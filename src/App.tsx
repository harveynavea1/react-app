import Navbar from "./components/navbar";
import FirstProg from "./components/FirstProg";
import SecondProg from "./components/SecondProg"
import ThirdProg from "./components/ThirdProg"
import FourthProg from "./components/FourthProg"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <FirstProg />
      <SecondProg />
      <ThirdProg />
      <FourthProg />
      {/* Other content of your application */}
    </div>
  );
}

export default App;
