import React from 'react'
import '../../css/main.css';
import '../../css/util.css';
import ImgBackground from '../../img/contact/bg-01.jpg';
import ImgLetter from '../../img/contact/img-01.png';

const bgStyle = {
  backgroundImage: `url(${ImgBackground})`
};

const Contact = () => {
  return (
    <div className="bg-contact100" style={bgStyle}>
      <div className="container-contact100">
        <div className="wrap-contact100">
          <div className="contact100-pic js-tilt" data-tilt>
            <img src={ImgLetter} alt="IMG"></img>
          </div>

          <form className="contact100-form validate-form">
            <span className="contact100-form-title">
              รับข่าวสารโปรโมชั่น
					</span>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
              <input className="input100" type="text" name="name" placeholder="Name"></input>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" name="email" placeholder="Email"></input>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <textarea className="input100" name="message" placeholder="Message"></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                Send
						</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
