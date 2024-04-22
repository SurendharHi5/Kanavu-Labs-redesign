import React, { useContext, useState } from 'react'
import Com from '../components/Com'
import serviceData from "../data/serviceData.json"

function Services() {

  const [serviceDatas,setServiceDatas] = useState(serviceData)

  return (
    <Com>
      <div className="card text-bg-dark">
        <img src="https://images.pexels.com/photos/3184652/pexels-photo-3184652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img navImg" alt="..." />
        <div className="card-img-overlay imgCont">
          <div className='row align-items-center'>
          <div className="col-md-6 imgText">
                      <h1 className="mb-3 text-white">Our Services</h1>
                      <p className="mb-4 text-white">We offer a wide range of services that are designed to meet the needs of businesses and individuals alike.</p>
                  </div>
          </div>
        </div>
      </div>

      <div className="service-sec bg-light text-center mt-5" id="why us">
	    <div className="container">
	        
	        <div className="row justify-content-center g-4">

			{
				serviceDatas.map((serviceData)=>{
					return(
						<div className="col-lg-4 col-md-12 d-flex" key={serviceData.id}>
	                <div className="service-img position-relative text-start">
	                    <img src={serviceData.img} className="img-fluid mb-4" alt=""/>
	                    <h4 className="fw-bold mb-3">{serviceData.h4}</h4>
	                    <p>{serviceData.p}</p>
	                </div>
	            </div>
					)
				})
			}
	           
	        </div>
	    </div>
	</div>
    </Com>
  )
}

export default Services