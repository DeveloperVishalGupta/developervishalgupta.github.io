import React from "react";

// import components
import ServicesPage from "../components/ServicesPage";
// import ServicesPage from '';
import MyFortfolio from "../components/MyPortfolio";
import Resume from "../components/Resume";
import FeedBack from "../components/FeedBack";
import ConnectUs from "../components/ConnectUs";


// import images
import greenStrip from '../images/greenStrip.png';
import VishalGupta from '../images/vishalGupta.png';
import webDev from '../images/webdevelopemnet.jpg';
import webdev2 from '../images/Development.webp';
import websiteSS1 from '../images/ss/AllProducts.png';
import websiteSS2 from '../images/ss/Ecommerce.png';
import websiteSS3 from '../images/ss/Educational.png';
import websiteSS4 from '../images/ss/Login.png';
import resumeImage from '../images/resumeAnime.png';
import reactIcon from '../iconImages/react.png';
import htmlIcon from '../iconImages/html.png';
import cssIcon from '../iconImages/css.png';
import wordpressIcon from '../iconImages/wordpress.png';
import bootstrapIcon from '../iconImages/boostrap.png';
import Quote from '../images/quate.png';
import QuoteImage from '../images/quateImage.png';
// import FeedbackImage from '../images/FeedBack.png';


// import icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faMagnifyingGlass,
    faCartShopping,
    faLaptopCode,
    faPencilSquare,
    faCircleCheck,
    faCaretRight,
    faCaretLeft
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";


// constant text
const ConnectUsHeadingLine1 = 'Vishal Is every Day here  for you.';
const ConnectUsHeadingLine2 = '';


export default function HomePage() {
    return (
        <>
            <Home greenStrip={greenStrip} VG={VishalGupta} circelCheck={faCircleCheck} intsaIcon={faInstagram}
                Github={faGithub} linkedIn={faLinkedinIn} />
            <ServicesPage webdev={webDev} webdev2={webdev2} codeIcon={faLaptopCode} pencilIcon={faPencilSquare} />
            <MyFortfolio ss1={websiteSS1} ss2={websiteSS2} ss3={websiteSS3} ss4={websiteSS4} />
            <Resume leftArrow={faCaretLeft} rightArrow={faCaretRight} resumeImage={resumeImage} react={reactIcon} html={htmlIcon} wp={wordpressIcon} bts={bootstrapIcon}
                css={cssIcon} />
            <FeedBack image={QuoteImage} quoteIcon={Quote} feedbackImage={FeedbackImage} leftArrow={faCaretLeft} rightArrow={faCaretRight} />
            <ConnectUs HeadingLine1={ConnectUsHeadingLine1} HeadingLine2={ConnectUsHeadingLine2} />
        </>
    )
}