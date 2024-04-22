import React from 'react'
import { proContext } from '../context/proContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import { AiFillUpSquare } from "react-icons/ai";


function Home() {
	const { homeDatas, clientsDatas } = useContext(proContext)
  return (
    <div>
      <div>
      <div className='header'>
      
      <div className='row'>
      <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand " href="/home"><img className='logo' src='https://www.kanavulabs.com/images/logo.png' alt='Logo'/></a>
    <button className="navBtn navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body navList">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/services">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/products">Our Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/faq">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/contact">Contact Us</a>
          </li>
          
        </ul>
        <button type="button" className="clBtn btn btn-dark">Call us</button>
      </div>
    </div>
  </div>
</nav>
      </div>

    </div>

    <div>
	<div className=" text-bg-dark homeCard">
  <img src="https://images.pexels.com/photos/3184652/pexels-photo-3184652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=" homeImg" alt="..." />
  <div className="card-img-overlay imgCont">
    <div className='row align-items-center'>
    <div className="col-md-6 imgText">
                <h1 className="mb-3 text-white">Kanavu Labs</h1>
                <p className="mb-4 text-white">Our team is dedicated to delivering world-class innovation using the constructive power of today's technology.</p>
                <button type="button" className="clBtn btn btn-light">View Our Works</button>
            </div>
    </div>
  </div>
  
</div>
<svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
	</div>


<div className="pt-5" id="aboutUs">
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

<br />
<br/>
  
<div className="service-sec bg-light text-center mt-5" id="whyUs">
	    <div className="container">
	        <div className="row justify-content-center g-xl-5 g-4">
	            <div className="col-lg-12">
	                <div className="sec-title mb-5">
	                    <h6 className="text-uppercase fw-bold">Why Us</h6>
	                    <h2 className='fw-bold'>What Makes Us Unique</h2>
	                </div>
	            </div>
	        </div>
	        <div className="row justify-content-center g-4">

			{
				homeDatas.map((homeData)=>{
					return(
						<div className="col-lg-3 col-md-6 d-flex" key={homeData.id}>
	                <div className="service-img position-relative">
	                    <img src={homeData.img} className="img-fluid mb-4" alt=""/>
	                    <h4 className="fw-bold mb-3">{homeData.h4}</h4>
	                    <p>{homeData.p}</p>
	                </div>
	            </div>
					)
				})
			}
	           
	        </div>
	    </div>
	</div>


  <div className="client-block mt-5">
	    <div className="container">
	        <div className="row g-xl-5 g-4 align-items-center justify-content-center text-center">
	            <div className="col-lg-7">
	                <div className="sec-title mb-5">
	                    <h6 className="text-uppercase fw-bold">Our Clients</h6>
	                    <h2 className='fw-bold'>Few People We Served</h2>
	                </div>
	            </div>
	        </div>
	        <div className="row g-0 line-box justify-content client-images cenPage">
			{
				clientsDatas.map((clientsData)=>{
					return(
						<div className="col-lg-3 col-md-4 col-sm-12" key={clientsData.id}>
					<img src={clientsData.img} className="img-fluid" alt="" />
				</div>
					)
				})
			}
				
			</div>
	    </div>
	</div>

	<ScrollToTop smooth component={<AiFillUpSquare className='topIcon' />} />


    <div className='footer mt-3'>
    <div className="row">
        <div className="text-center container-fluid">
            <p className="copyright">© 2023 All Rights Reserved by Kanavu Labs Private Limited.</p>
        </div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Home