import React from "react";
import Button from 'react-bootstrap/Button';
import upcsLabIcon from '../images/logobowl.png'

export default function MyFortfolio(props) {
    const ProjectArray = [
        {
            name: 'Carversal',
            class: 'site1BgImage bebas-neue-regular',
            image: null,
            discription: 'Carversal is a car blog site dedicated to providing the best and most concise information about cars to our users. We aim to enhance the user experience by integrating charts, modules, and images, allowing for quick, informative reads that respect the finite time of our audience.',
            projectLink: 'https://www.carversal.com/'
        },
        {
            name: 'upsc lab',
            class: 'site2BgImage',
            image: upcsLabIcon,
            projectLink: 'https://www.upsclab.in',
            discription: 'UPSC Lab are dedicated to helping aspiring civil servants achieve their dream of becoming an IAS/IPS/IFS officer. '
        },
        {
            name: 'upsc lab',
            class: 'site2BgImage',
            image: upcsLabIcon,
            projectLink: 'https://www.upsclab.in',
            discription: 'UPSC Lab are dedicated to helping aspiring civil servants achieve their dream of becoming an IAS/IPS/IFS officer. '
        },

    ];
    const ProjectCard = ProjectArray.map((value) => {
        return <div className="align-items-center col-md-6 d-flex justify-content-around mb-5" style={{ minHeight: '16rem' }}>
            <div className="projectCard">
                <div className="Borderline"></div>
                <div className="imageSection">
                    {value?.image
                        ? <img src={value.image} alt="" />
                        : <h1
                            style={{ color: 'white ', zIndex: 1, fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}
                            className="text-uppercase bebas-neue-regular"
                        >
                            {value?.name}
                        </h1>}

                    {/*  */}
                </div>
                <div className="Content ">
                    <div className="details">
                        <h2 className='mb-3 text-uppercase' style={{ fontWeight: 700 }}>{value.name}</h2>
                        <p className="ellipsis3 text-start " >{value.discription}</p>

                        <Button href={value.projectLink} target="_" variant="info" className="text-black" style={{ fontWeight: 500 }} type=''>View More</Button>
                    </div>

                </div>
            </div>
        </div>
    })
    return (
        <>
            <div className="container-fluid " id="MyWorks" style={{ backgroundColor: '#272b44', minHeight: '100vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className='greenColor pb-2 pt-5 rubicFont text-capitalize text-center'>latest work</h2>
                        <h1 className='mb-5 playfairFont pt-2 text-center text-white Portfolio'><b>My Portfolio</b></h1>
                        <div className="row" style={{ marginTop: '4rem' }}>{ProjectCard}</div>
                    </div>
                </div>
            </div>
        </>
    )
}