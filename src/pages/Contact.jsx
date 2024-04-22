import React, { useRef } from 'react'
import Com from '../components/Com'
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kxm1gek', 'template_sxyv35v', form.current, {
        publicKey: '7aDJL6fgqXmB-m1HG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Sent Successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Something went wrong")
        },
      );
      e.target.reset()
  };

  return (
    <Com>
      <div className="card text-bg-dark">
        <img src="https://images.pexels.com/photos/3184652/pexels-photo-3184652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img navImg" alt="..." />
        <div className="card-img-overlay imgCont">
          <div className='row align-items-center'>
          <div className="col-md-6 imgText">
                      <h1 className="mb-3 text-white">Contact Us</h1>
                      <p className="mb-4 text-white">We work round the clock, feel free to get in touch with us any time you want.</p>
                  </div>
          </div>
        </div>
      </div>

      <br/>
      <br/>

      <div className="service-sec bg-light text-center" id="product4">
	    <div className="container">

            <div className="row justify-content-center g-xl-5 g-4">
	            <div className="col-lg-12">
	                <div className="sec-title mb-5">
	                    <h2>Our Point Of Contacts</h2>
	                </div>
	            </div>
	        </div>

	        <div className="row justify-content-center g-4">
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">South Asia</h4>
	                    <h6 className="fw-bold mb-3">Magudeeswaran C</h6>
	                    <button type="button" className="clBtn btn btn-dark">Get in Touch</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Europian Union</h4>
	                    <h6 className="fw-bold mb-3">Anirudhyan M</h6>
	                    <button type="button" className="clBtn btn btn-dark">Get in Touch</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">North America</h4>
	                    <h6 className="fw-bold mb-3">Howard H Chow</h6>
	                    <button type="button" className="clBtn btn btn-dark">Get in Touch</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">South America</h4>
	                    <h6 className="fw-bold mb-3">Abishiek M</h6>
	                    <button type="button" className="clBtn btn btn-dark">Get in Touch</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">UAE &amp; Africa</h4>
	                    <h6 className="fw-bold mb-3">Jay Balachandran</h6>
	                    <button type="button" className="clBtn btn btn-dark">Get in Touch</button>
	                </div>
	            </div>
	    </div>
	</div>
	</div>

	<br/>
	<br/>
	
        <div className="container">
            <div className="row g-xl-5 g-4 align-items-center justify-content-center">
                <div className="col-lg-8">
                    <div className="sec-title mb-5 text-center">
                        <h2 className="">Share your Query</h2>
                    </div>
                    <div className="border p-3 rounded-3">
                        <div className="footer-form p-4 rounded-3 p-5">
                            <form className="row g-4" ref={form} onSubmit={sendEmail}>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label">Name <span className="text-danger">*</span></label>
                                        <input name="name" className="form-control" type="text" placeholder="Name" required="true"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label">Email <span className="text-danger">*</span></label>
                                        <input name="email" className="form-control" type="email" placeholder="yourname@email.com" required="true"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label">Phone <span className="text-danger">*</span></label>
                                        <input name="phone" className="form-control" type="text" placeholder="(90) 123 456 789" required="true"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label">Subject <span className="text-danger">*</span></label>
                                        <input name="subject" className="form-control" type="text" placeholder="Subject" required="true"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Message <span className="text-danger">*</span></label>
                                        <textarea name='message' className="form-control" placeholder="Type Your Message" required="true" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
									<button type="submit" value="submit" className="clBtn btn btn-dark">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </Com>
  )
}

export default Contact