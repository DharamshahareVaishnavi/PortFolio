import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { VscGithub } from "react-icons/vsc";
import Heading from '../Common/Heading';
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    let { register, handleSubmit, formState: { errors }, reset } = useForm()

    let onsubmit = (data, e) => {
        e.preventDefault()
        console.log(data);
        axios.post("https://my-portfolio-c6560-default-rtdb.firebaseio.com/contactform.json", data)
        reset()
    }

    
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])


    return (
        <>
            <div id="Contact">
                <div className="container-fluid  px-5 bg-warning" data-aos="flip-up">
                    <Heading h1="Contact" h2="Share your info" />
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <h1>Lets's get in touch</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, atque?</p>
                            <br />
                            <h4>Living In</h4>
                            <p>Nagpur,Maharashtra</p>
                            <br />
                            <h4>Call:</h4>
                            <p>(+91)7767825500</p>
                            <br />
                            <a href="#Home" target="_blank" style={{ colour: "black" }}><VscGithub style={{ fontSize: "35px", color: "black" }} /></a>
                            <br /><br />
                        </div>

                        <div className="col-md-6 shadow">
                            <form action="" className='p-3' onSubmit={handleSubmit(onsubmit)}>
                                <label htmlFor="" className='form-label'>Enter Name</label>
                                <input type="text" name='Name' {...register("Name", {required: "This Field is Required!" })} className='form-control' />
                                <p className='text-danger'>{errors.Name?.message}</p>
                                <label htmlFor="" className='form-label'>Enter Email</label>
                                <input type="email" name='Email' {...register("Email", { required: "This Field is Required!" })} className='form-control' />
                                <p className='text-danger'>{errors.Email?.message}</p>
                                <label htmlFor="" className='form-label'>How can I help you?</label>
                                <input type="text" name='Message' {...register("Message", { required: "This Field is Required!" })} className='form-control' />
                                <p className='text-danger'>{errors.Message?.message}</p>
                                <button type="submit" className="btn btn-outline-dark">Submit</button>
                                <br /><br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact