import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./Components/AppName";
import AppSlogan from "./Components/AppSlogan";
import AppCurrentTime from "./Components/AppCurrentTime";

function App() {
  return (
    <center>
      <AppName />
      <AppSlogan />
      <AppCurrentTime />
    </center>
  );
}

export default App;
