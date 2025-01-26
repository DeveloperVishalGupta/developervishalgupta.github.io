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
import { Helmet } from "react-helmet";

function App() {
    return (
        <>
            <Helmet>
                <title>Dynamic Page Title</title>
                <meta name="description" content="Energetic frontend developer with 3 year 5 months of experience in creating responsive and user-friendly web applications, from planning to launch. Skilled in post-production support and resolving UI/UX defects for various business processes. Proficient in HTML, CSS, JavaScript, and modern frameworks like React JS and Next.js." />
                <meta property="og:title" content="Frontend Developer | Web Developer | Building Responsive and Interactive Interfaces" />
                <meta property="og:description" content="Energetic Frontend Developer with 3+ years of experience in creating responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, and Next.js. Skilled in UI/UX optimization and post-production support." />
                <meta property="og:image" content="./images/vishalGupta.png" />
                <meta property="og:image:alt" content="Portfolio of Vishal Gupta - Frontend Developer" />
                <meta property="og:url" content="https://developervishalgupta.github.io/vishalportfolio/" />
            </Helmet>
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
