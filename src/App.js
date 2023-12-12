import React from "react";
import './App.css';
import Header from "./components/Mainpage/Header/Header";
import MainContent from "./components/Mainpage/MainContent/MainContent";
import Footer from "./components/Mainpage/Footer/Footer";
import Menu from "./components/Menu/Menu";

function App() {

    return (
        <div className="App">
            <Header/>
       <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
