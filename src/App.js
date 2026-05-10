import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import ServicesPage from "./components/ServicesPage";
import MyFortfolio from "./components/MyPortfolio";
import Resume from "./components/Resume";
import FeedBack from "./components/FeedBack";
import ConnectUs from "./components/ConnectUs";
import Footer from "./components/Footer";
import greenStrip from './images/greenStrip.png';
import VishalGupta from './images/vishalGupta.png';
import { faLaptopCode, faPencilSquare, faCircleCheck, } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function App() {
    return (
        <>
            <Header />
            <Home greenStrip={greenStrip} VG={VishalGupta} circelCheck={faCircleCheck} intsaIcon={faInstagram}
                Github={faGithub} linkedIn={faLinkedinIn} />
            <ServicesPage codeIcon={faLaptopCode} pencilIcon={faPencilSquare} />
            <MyFortfolio />
            <Resume />
            <FeedBack />
            <ConnectUs />
            <Footer />
        </>
    );
}
export default App;
