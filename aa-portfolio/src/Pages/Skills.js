import React, { useContext, useEffect } from 'react'
import Heading from '../Common/Heading'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReacttable } from "react-icons/si";
import { data } from '../Store';
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    
    useEffect(()=>{
        AOS.init()
        AOS.refresh();
    },[])

    let {mode,setMode}=useContext(data)

    let obj = [
        {
            id: 1,
            icon: <SiHtml5 />,
            heading: "HTML",
            colour: "blue"
        },
        {
            id: 2,
            icon: <SiCss3 />,
            heading: "CSS",
            colour: "red"
        },
        {
            id: 3,
            icon: <SiBootstrap />,
            heading: "BOOTSTRAP",
            colour: "purple"
        },
        {
            id: 4,
            icon: <SiJavascript />,
            heading: "JAVA-SCRIPT",
            colour: "yellow"
        },
        {
            id: 5,
            icon: <SiReacttable />,
            heading: "REACT",
            colour: "skyblue"
        }
    ]

    return (
        <>
        <div id="Skills">
        <div className={`container-fluid  bg-${mode?'dark':'light'} text-${mode?'light':'dark'}`} >
                <Heading h1="Skills" h2="My Skills-Set" />
                <div className='row justify-content-evenly'>
                    {
                        obj.map((e) => {
                            return (
                                <div className="col-md-5 mb-3 text-center" key={e.id} data-aos="zoom-in">
                                    <div className="card">
                                        <div style={{ fontSize: '75px', color: e.colour }}>{e.icon}</div>
                                        <div className="card-body">
                                            <h5 className="card-text text-dark">{e.heading}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>  
        </div>
            
        </>
    )
}

export default Skills