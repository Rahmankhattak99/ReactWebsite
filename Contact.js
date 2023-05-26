import React from 'react';
import svg5 from '../image/email.svg';

const Contact = () => {
  return (
    <>
      <div className="home5" id='Contact'>
        <div className="left">
          <img src={svg5} />
        </div>
        <div className="right">
          <h1>Contact Us</h1>
          <form>
            <div>
              <input type="text" placeholder='Your Name' />
            </div>
            <div>
              <input type="text" placeholder='User Email' />
            </div>
            <div>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
