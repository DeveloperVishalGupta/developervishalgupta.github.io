import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import feedBack from '../images/feedBack.png'
import axios from 'axios';
// const API_URL = 'https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews';

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function FeedBack(props) {
    const profileId = '13358731228513348858';
    // locations / { locationId }
    const API_URL = `https://mybusiness.googleapis.com/v4/accounts/${profileId}/reviews`;

    const options = {
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
    };
    const feedbackArray = [{
        fb: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point.',
        // clientName: 'Vishal Gupta'
    },
    {
        fb: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
        // clientName: 'Abhishek Gupta'
    }];

    const getReviews = async () => {
        try {
            const response = await axios.get(API_URL, {
                headers: {
                    'Authorization': `Bearer YOUR_ACCESS_TOKEN` // Replace with actual OAuth token
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    // const respons = https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews

    const feedbackHtml = feedbackArray.map((value, index) => {
        return <div key={index}>
            <h3 className='playfairFont' style={{ lineHeight: '1.3', wordSpacing: '3px', letterSpacing: '1px' }}>
                {value.fb}</h3>
            <h6 className='mt-4'> {value.clientName}</h6>
        </div>
    })
    return (
        <>
            <div className="container-fluid d-flex darknavyBg flex-column justify-content-around text-white" id="FeedBack" style={{ minHeight: '100vh' }}>
                <h1 className='mb-5 playfairFont pt-2 text-center text-white Portfolio'><b>Reviews</b></h1>
                <div className="item" >
                    <div className="row align-items-center position-relative ">
                        <div className="col-md-5">
                            {/* <img src={feedBack} className='w-100' alt="" /> */}
                        </div>
                        <div className="col-md-7">
                            <OwlCarousel {...options} autoplay='true' loop nav >
                                {feedbackHtml}
                            </OwlCarousel>

                        </div>
                        <img src={props.feedbackImage} alt='' className='w-50 position-absolute' style={{ right: '5%', bottom: '5%' }} />
                    </div>
                </div>

            </div>

        </>
    )
}   