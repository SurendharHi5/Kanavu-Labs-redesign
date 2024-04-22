import React from 'react'
import Com from '../components/Com'

function Product() {
  return (
    <Com>
      <div className="card text-bg-dark">
        <img src="https://images.pexels.com/photos/3184652/pexels-photo-3184652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img navImg" alt="..." />
        <div className="card-img-overlay imgCont">
          <div className='row align-items-center'>
          <div className="col-md-6 imgText">
                      <h1 className="mb-3 text-white">Our Products</h1>
                      <p className="mb-4 text-white">Our comprehensive range of products are fine tuned to support a versatile range of clients.</p>
                  </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>

      <section className="service-sec bg-light text-center" id="product1">
	    <div className="container">
	        <div className="row justify-content-center g-xl-5 g-4">
	            <div className="col-lg-12">
	                <div className="sec-title mb-5">
	                    <h2>Medical &amp; Pharma Industry</h2>
	                </div>
	            </div>
	        </div>
	        <div className="row justify-content-center g-4">
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Barcode Management System</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Laboratory Management System</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Clinical Management System</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Hospital Management System</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Billing Management System</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            
	            <div className="row justify-content-center g-xl-5 g-4">
	            <div className="col-lg-12">
	                <div className="sec-title mb-5">
	                    <h2>Wedding and Events</h2>
	                </div>
	            </div>
	        </div>
	        <div className="row justify-content-center g-4">
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Matrimony Website</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Dating Application</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Booking Application</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            
	            <div className="row justify-content-center g-xl-5 g-4">
	            <div className="col-lg-12">
	                <div className="sec-title mb-5">
	                    <h2>Food and Beverages</h2>
	                </div>
	            </div>
	        </div>
	        <div className="row justify-content-center g-4">
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Food Engine</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">Billing System</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            <div className="col-lg-3 col-md-6 md-flex">
	                <div className="service-img position-relative">
	                    <h4 className="fw-bold mb-3">ERP and BPM</h4>
	                    <button type="button" className="clBtn btn btn-dark">View More</button>
	                </div>
	            </div>
	            
	        </div></div></div></div></section>


    </Com>
  )
}

export default Product