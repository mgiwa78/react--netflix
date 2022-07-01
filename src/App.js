import "./App.css";
import Home from "./components/home/home.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/login/login.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route element={<Auth />} path="/auth/*"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
