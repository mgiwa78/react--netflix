import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
