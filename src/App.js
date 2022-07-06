import "./App.css";

import Home from "./components/home/home.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/login/login.component";
import UserHome from "./components/user-home/user-home.component";
import { UserProvider } from "./context/user.context";
import { MovieProvider } from "./context/movies.context";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MovieProvider>
          <UserProvider>
            <NavigationBar />
            <Routes>
              <Route element={<Auth />} path="/auth/*"></Route>
              <Route element={<Home />} path="/*"></Route>
              <Route element={<UserHome />} path="/user"></Route>
            </Routes>
          </UserProvider>
        </MovieProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
