import React from 'react'
import Com from '../components/Com'

function Faq() {
  return (
    <Com>
      <div className="card text-bg-dark">
        <img src="https://images.pexels.com/photos/3184652/pexels-photo-3184652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img navImg" alt="..." />
        <div className="card-img-overlay imgCont">
          <div className='row align-items-center'>
          <div className="col-md-6 imgText">
                      <h1 className="mb-3 text-white">Frequently Asked Questions</h1>
                  </div>
          </div>
        </div>
      </div>
    </Com>
  )
}

export default Faq