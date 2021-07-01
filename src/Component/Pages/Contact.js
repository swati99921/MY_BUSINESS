import React from 'react'
function Contact() {
    return (

        <div className="container">
            <form className="text-white">
                <h1>Contact Information</h1>
                <p className="text-white">B-421 Jahangir Puri, New Delhi-110033</p>
                <br />
                <p className="text-white">mk430312@gmail.com</p>
                <p className="text-white">Call Us: +91 8510950521</p>
                <div >
                    <label className="form-label">Email-Address</label>
                    <input className="form-control " type="email" placeholder="Enter Your Email" />

                </div>
                <div >
                    <label className="form-label">Password</label>
                    <input className="form-control " type="password" placeholder="Enter Your Password" />

                </div>
               
                <br/> 
                <div>
                <textarea className="form-control " placeholder="Your Message"></textarea>
                </div> <br/>
            </form>
            <button className="btn btn-danger " >Submit</button>
        </div>
    );
}
export default Contact;