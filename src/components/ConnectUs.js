import React, { useState } from "react";
import callIconImage from '../images/callOnImage.png';
import emailIconImage from '../images/Email.png';
import axios from "axios";
import { Button, Form, } from "react-bootstrap";

export default function ConnectUs() {

    const [formData, setFormData] = useState({
        firstName: null,
        lastName: null,
        Phone: null,
        email: null,
        message: null
    });

    const handleChange = (e) => {
        console.log(e.nativeEvent.data);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {

        if (formData?.email && formData?.firstName && formData?.message) {
            try {
                await axios.post('/api/v1/e84tze3dtkpm6', { data: formData });  // Replace with your SheetDB URL
                setFormData({
                    firstName: null,
                    lastName: null,
                    Phone: null,
                    email: null,
                    message: null
                });
            } catch (error) {
                alert('Error submitting form');
                console.error('Error submitting form:', error);
            }
        }
        //else {
        //     if (!formData?.email) {
        //         setmodelMessage({ error: true, message: 'please fill the Email Address' })
        //     } else if (!formData?.firstName) {
        //         setmodelMessage({ error: true, message: 'please fill the Name' })
        //     } else {
        //         setmodelMessage({ error: true, message: 'please fill the Message' })
        //     }
        //     handleShow()
        // }
    };

    const connectArray = [{ image: callIconImage, ContactName: 'Call Us.', ConnectAT: 'tel:+91 9320206598', ConnectWith: '+91 9320206598' },
    { image: emailIconImage, ContactName: 'Email.', ConnectAT: 'mailto:developer.vishaal@gmail.com', ConnectWith: 'developer.vishaal@gmail.com' },
    ];

    const connectStructure = connectArray.map((value, index) => {
        return <div className={`${(connectArray.length - 1) !== index && 'divider'} col-md-6 playfairFont`} key={index}>
            <div className="d-none d-md-block">
                <div className="d-flex justify-content-center py-5">
                    <div className="align-items-center d-flex justify-content-center me-4 rounded-circle"
                        style={{ background: '#434764', width: '75px', height: '75px' }}>
                        <img src={value.image} alt="" style={{ width: '65%' }} />
                    </div>
                    <div className="" style={{ width: `calc(100% - 92px)` }}>
                        <h3 className='border-bottom d-inline-block pe-3 ps-1' style={{
                            fontWeight: 700, letterSpacing: '1px',
                            paddingBottom: '8px', borderBottom: '2px solid green',
                        }}>
                            {value.ContactName}
                        </h3>
                        <a href={value.ConnectAT} className='text-white'> <h5>{value.ConnectWith}</h5></a>
                    </div>
                </div>
            </div>
            <div className="d-md-none">
                <div className="justify-content-center py-md-5 my-4">
                    <div className="align-items-center d-flex">
                        <div className="align-items-center d-flex justify-content-center me-4 rounded-circle"
                            style={{ background: '#434764', width: '75px', height: '75px' }}
                        >
                            <img src={value.image} alt="" style={{ width: '65%' }} />
                        </div>
                        <h3 className='border-bottom  d-inline-block pe-md-3 ps-md-1' style={{
                            fontWeight: 700, letterSpacing: '1px',
                            paddingBottom: '2px', borderBottom: '2px solid green',
                        }}>
                            {value.ContactName}
                        </h3>
                    </div>

                    <div className="my-2 text-center w-100">
                        <a href={value.ConnectAT} className='text-white'> <h5>{value.ConnectWith}</h5></a>
                    </div>
                </div>
            </div>



        </div>

    })
    return (
        <>
            <div className="container-fluid text-white" style={{ background: 'rgb(39, 43, 68)' }} id="contactSection">
                <div className="row mx-0">
                    <div className="col-md-12 " style={{ paddingBottom: '5rem' }}>
                        <div className=" justify-content-center mb-2 mx-md-4 row">
                            <div className="col-md-11 col-lg-10">
                                <h1 className='playfairFont mt-5'><b>Get In <span className='greenColor'>Touch.</span></b></h1>
                                <p className='mb-1'>It is a long established fact that a reader will be distracted by the readable </p>
                                <p>content of a page when looking at its layout.</p>
                                <div className="row border mt-5 border-2 rounded-4">
                                    {connectStructure}
                                </div>
                            </div>
                        </div>
                        {/* <h1 className='playfairFont text-center text-white mt-5 mb-4'><b>Contact us and <span className='greenColor'>stay in touch</span></b></h1> */}

                    </div>
                </div>
            </div>
            {/* <div className="container-fluid py-5 " style={{ backgroundColor: 'rgb(39, 43, 68)' }}>
                <div className="row justify-content-center mx-0">
                    <div className="col-md-10">
                        <div className="justify-content-around row">
                            <div className="bg-gradient border col-md-7 p-5 rounded-4" >
                                <Form>
                                    <div>
                                        <Form.Label className="text-white small">First Name</Form.Label>
                                        <Form.Control
                                            name="firstName"
                                            type="text"
                                            className='mb-4'
                                            value={formData.firstName ? formData.firstName : ''}
                                            onChange={handleChange}
                                            placeholder="Vikram"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Form.Label className="text-white small">Last Name</Form.Label>
                                        <Form.Control
                                            name="lastName"
                                            type="text"
                                            className='mb-4'
                                            value={formData.lastName ? formData.lastName : ''}
                                            onChange={handleChange}
                                            placeholder="patel"
                                        />
                                    </div>
                                    <div>
                                        <Form.Label className="text-white small">Phone</Form.Label>
                                        <Form.Control
                                            name="Phone"
                                            type="number"
                                            className='mb-4'
                                            value={formData.Phone ? formData.Phone : ''}
                                            onChange={handleChange}
                                            placeholder="0123456789"
                                        />
                                    </div>
                                    <div>
                                        <Form.Label className="text-white small">E-mail</Form.Label>
                                        <Form.Control
                                            name="email"
                                            type="email"
                                            className='mb-4 '
                                            value={formData.email ? formData.email : ''}
                                            onChange={handleChange}
                                            placeholder="Vikram.patel@example.xyz"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Form.Label className="text-white small">Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            className='mb-4 '
                                            rows={5}
                                            style={{ height: '150px' }}
                                            value={formData.message ? formData.message : ''}
                                            onChange={handleChange}
                                            placeholder="I would like to know more about your services."
                                            required
                                        />
                                    </div>

                                    <Button variant="primary" size="lg"
                                        className='btn greenBgColor px-3 text-white border border-success'

                                        onClick={() => { handleSubmit() }}
                                    >Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div > */}

        </>
    )
}