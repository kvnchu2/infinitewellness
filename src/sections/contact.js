import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { useForm, ValidationError } from "@formspree/react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee, faLocationDot, faPhone, faEnvelope)

export default function Contact(props)  {
  const [state, handleSubmit] = useForm("xqknvjoy");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              
              {/* <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" name="message" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
                <ValidationError errors={state.errors} />
              </form> */}

              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        // onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        // onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    // onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div id='success'></div>
                <button type='submit' disabled={state.submitting} className='btn btn-custom btn-lg'>
                  Send Message
                </button>
                <ValidationError errors={state.errors} />
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                <FontAwesomeIcon icon={["fas", "location-dot"]} /> Address
                </span>
                6700 Dunblane Ave, V5H 0J3, Burnaby, BC 
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                <FontAwesomeIcon icon={["fas", "phone"]} /> Phone
                </span>{' '}
                778-549-8885
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                <FontAwesomeIcon icon={["fas", "envelope"]} /> Email
                </span>{' '}
                theinfinitewellness@gmail.com
              </p>
            </div>
          </div>
          {/* <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
