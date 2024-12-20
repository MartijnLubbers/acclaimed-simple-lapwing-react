import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <footer className="footer1-footer1 thq-section-padding">
      <div className="footer1-max-width thq-section-max-width">
        <div className="footer1-content">
          <div className="footer1-links">
            <div className="footer1-container1">
              <div className="footer1-container2"></div>
            </div>
            <div className="footer1-container3">
              <div className="footer1-column3"></div>
            </div>
          </div>
        </div>
        <div className="footer1-row1">
          <span className="thq-body-small">
            {props.content31 ?? (
              <Fragment>
                <span className="footer1-text3">
                  <span>KvK nummer: 51872366</span>
                  <br></br>
                  <span>BTW nummer: NL 107643285B01</span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="footer1-footer-links1">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              className="footer1-image"
            />
          </div>
        </div>
        <div className="footer1-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer1-row2">
            <span className="thq-body-small">
              {props.content3 ?? (
                <Fragment>
                  <span className="footer1-text1">
                    © 2024 Fincis. All rights reserved.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="footer1-footer-links2">
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer1-text2">Algemene Voorwaarden</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer1.defaultProps = {
  content3: undefined,
  cookiesLink: undefined,
  imageSrc: '/87e42a55e0-1400w.jpeg',
  imageAlt: 'image',
  content31: undefined,
}

Footer1.propTypes = {
  content3: PropTypes.element,
  cookiesLink: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  content31: PropTypes.element,
}

export default Footer1
