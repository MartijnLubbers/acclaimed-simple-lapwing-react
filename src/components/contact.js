import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div id={props.contactId} className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <div className="contact-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-text18">Contact</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <span className="contact-email1 thq-body-small">
          {props.email11 ?? (
            <Fragment>
              <span className="contact-text19">
                Heeft u hulp nodig met uw administratie of belastingaangifte?
                Neem gerust contact op!
              </span>
            </Fragment>
          )}
        </span>
        <div className="contact-row">
          <div className="contact-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content3">
                <h3 className="contact-text11 thq-heading-3">Email</h3>
              </div>
              <span className="contact-email2 thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact-text13">ciska@fincis.nl</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text12 thq-heading-3">Kantoor</h3>
              </div>
              <span className="contact-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact-text14">
                      <span>Haarlerberg 52</span>
                      <br></br>
                      <span>3453 RG De Meern</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  email1: undefined,
  address1: undefined,
  heading1: undefined,
  email11: undefined,
  contactId: '',
}

Contact.propTypes = {
  email1: PropTypes.element,
  address1: PropTypes.element,
  heading1: PropTypes.element,
  email11: PropTypes.element,
  contactId: PropTypes.string,
}

export default Contact
