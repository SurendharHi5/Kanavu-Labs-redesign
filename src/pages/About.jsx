import React from 'react'
import Com from '../components/Com'

function About() {
  return (
    <Com>

      <div className="card text-bg-dark">
        <img src="https://images.pexels.com/photos/3184652/pexels-photo-3184652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img navImg" alt="..." />
        <div className="card-img-overlay imgCont">
          <div className='row align-items-center'>
          <div className="col-md-6 imgText">
                      <h1 className="mb-3 text-white">About Us</h1>
                      <p className="mb-4 text-white">A new age startup with a million dreams.</p>
                  </div>
          </div>
        </div>
      </div>

    
      <div className="pt-5 about" >
	    <div className="container">
	        <div className="row g-xl-5 g-4 align-items-center">
	            <div className="col-lg-6 cenPage">
	                <div className="sec-title mb-4 bold">
	                    <b>
                      <h6 className="text-uppercase fw-bold">Our Company</h6>
	                    <h2>Something About Us</h2>
                      </b>
	                </div>
	                <p className="mb-4">
	                    We are a leading provider of high-quality products and services that are designed to meet the needs of businesses and individuals alike. We offers a wide range of products, including software, hardware, and other technology solutions, as well as a variety of other products and services that are tailored to meet the specific needs of our clients.</p>
	               <p> 
	                    In addition to our products, we also offer a comprehensive range of services. Our team of experts is skilled in providing a range of services, including custom software development, IT consulting, web and mobile app development, digital marketing, AI development and much more.
	                   
	               </p>
	            </div>
	            <div className="col-lg-6">
	                <div className="ms-4"><img src="https://www.kanavulabs.com/images/bg1.jpg" className="img-fluid shadow-lg p-2 rounded-3" alt="" /></div>
	            </div>
	        </div>
	    </div>
	</div>
<br/>
<br/>

  <div className="works-sec" id="product">
	    <div className="container">
	        <div className="row justify-content-center g-xl-5 g-4">
	            <div className="col-lg-12"></div>
	        </div>
	        <div className="row justify-content-between align-items-center g-5">
	            <div className="col-lg-5 ">
	                <img src="https://www.kanavulabs.com/images/bg2.jpg" className="img-fluid rounded-3 mt-5" alt="" />
	                
	            </div>
	            <div className="col-lg-5 position-relative ps-lg-5">
	                <div className="row justify-content-center g-4 ps-lg-5 cenPage">
	                    <div className="col-md-12">
	                        <div>
	                            
	                            <h4 className="fw-bold mb-3">Our Mission</h4>
	                            <p>Our mission is to deliver innovative IT solutions that empower businesses to achieve their goals. We do this by providing reliable, secure, and scalable services that enable our clients to streamline their operations, reduce costs, and drive growth. Our values of excellence, integrity, and customer satisfaction guide our work, and our team of experts is committed to delivering personalized solutions that meet our clients' unique needs.</p>
	                        </div>
	                    </div>
	                    <div className="col-12"><div className="border-bottom"></div></div>
	                    <div className="col-md-12">
	                        <div>
	                            <h4 className="fw-bold mb-3">Our Vision</h4>
	                            <p>Our vision is to become a leading provider of IT solutions that drive business success. We aim to achieve this by expanding our service offerings, developing new and innovative technologies, and partnering with businesses across industries. Our goal is to serve businesses of all sizes and types leverage the power of technology to achieve their objectives, and our team is committed to staying ahead of industry trends and continually innovating to meet the changing needs of our clients.</p>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>

    </Com>
  )
}

export default About