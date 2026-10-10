import React from 'react'

const ContactUs = () => {
  return (<>
  <div className='row py-3 contact'>
    <div className='col-sm-10 mx-auto'>
      <div className='webheading'>Contact <b className='text-color1'>Us</b></div>
      <hr className='w-25 mx-auto text-color1' />
      <div className='row'>
        <div className='col-sm-8 mx-auto'>
          <div className='row bg-color1 py-5 rounded-3'>
            <div className='col-5 text-light text-end'>
              <h5>Get in Touch :</h5>
              <span className='h3'>hr@zentora.in</span>
            </div>
            <div className='col-2'>
              <div className='rounded-circle shadow-lg contactor'>Or</div>
            </div>
            <div className='col-5 text-light'>
               <h5>Call us via :</h5>
              <span className='h3'>+91-1234567890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default ContactUs