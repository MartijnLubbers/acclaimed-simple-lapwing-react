import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer1 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-container1">
          <div className="footer-container2">
            <div className="footer-container3">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="footer-text4">
                      <span>KvK nummer: 51872366</span>
                      <br></br>
                      <span>BTW nummer: NL 107643285B01</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <span className="thq-body-small">
              {props.content3 ?? (
                <Fragment>
                  <span className="footer-text2">© 2024 Copyright</span>
                </Fragment>
              )}
            </span>
            <div className="footer-footer-links">
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer-text3">Algemene Voorwaarden</span>
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

Footer.defaultProps = {
  content3: undefined,
  cookiesLink: undefined,
  text: undefined,
}

Footer.propTypes = {
  content3: PropTypes.element,
  cookiesLink: PropTypes.element,
  text: PropTypes.element,
}

export default Footer
