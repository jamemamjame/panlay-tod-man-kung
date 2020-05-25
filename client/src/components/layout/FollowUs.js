import React from 'react'

const FollowUs = () => {
  console.log('FollowUs');
  return (
    <div id="footer" className="text-center">
      <div><h2>Follow Us</h2></div>
      <ul className="social-network social-circle">
        <li><a href="/#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook"></i></a></li>
        <li><a href="/#" className="icoLine" title="Line"><i className="fab fa-line"></i></a></li>
      </ul>
      <div className="row">
        <div className="col-12">
          <p className="text-center">&copy; Copyright 2020 - Panlay.  All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default FollowUs
