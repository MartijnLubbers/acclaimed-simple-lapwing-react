import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navigatie.css'

const Navigatie = (props) => {
  return (
    <header className="navigatie-container">
      <header data-thq="thq-navbar" className="navigatie-navbar-interactive">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="navigatie-image"
        />
        <div data-thq="thq-navbar-nav" className="navigatie-desktop-menu">
          <nav className="navigatie-links1">
            <a href={props.link1Url} className="thq-link thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="navigatie-text2">Home</span>
                </Fragment>
              )}
            </a>
            <a href={props.link2Url} className="thq-link thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="navigatie-text4">Over Mij</span>
                </Fragment>
              )}
            </a>
            <a href={props.link3Url} className="thq-link thq-body-small">
              {props.link3 ?? (
                <Fragment>
                  <span className="navigatie-text5">Diensten</span>
                </Fragment>
              )}
            </a>
            <a href={props.link4Url} className="thq-link thq-body-small">
              {props.link4 ?? (
                <Fragment>
                  <span className="navigatie-text6">Contact</span>
                </Fragment>
              )}
            </a>
          </nav>
          <div className="navigatie-buttons1">
            <a
              href="https://fincis.nl/"
              target="_blank"
              rel="noreferrer noopener"
              className="navigatie-action11 thq-button-animated thq-button-filled"
            >
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="navigatie-text7">Voorwaarden</span>
                  </Fragment>
                )}
              </span>
            </a>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navigatie-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigatie-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navigatie-mobile-menu">
          <div className="navigatie-nav">
            <div className="navigatie-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navigatie-logo"
              />
              <div data-thq="thq-close-menu" className="navigatie-close-menu">
                <svg viewBox="0 0 1024 1024" className="navigatie-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navigatie-links2">
              <a href={props.link1Url} className="thq-link thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navigatie-text2">Home</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navigatie-text4">Over Mij</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="thq-link thq-body-small">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navigatie-text5">Diensten</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link4Url} className="thq-link thq-body-small">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navigatie-text6">Contact</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link5Url} className="thq-link thq-body-small">
                {props.link5 ?? (
                  <Fragment>
                    <span className="navigatie-text3">Link5</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
          <div className="navigatie-buttons2">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navigatie.defaultProps = {
  link1: undefined,
  link2Url: 'https://www.teleporthq.io',
  link5: undefined,
  link1Url: 'https://www.teleporthq.io',
  link2: undefined,
  link3Url: 'https://www.teleporthq.io',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'logo',
  link3: undefined,
  link5Url: 'https://www.teleporthq.io',
  link4Url: 'https://www.teleporthq.io',
  link4: undefined,
  action1: undefined,
  imageSrc: '/cd9c489c03-200w.png',
  imageAlt: 'image',
}

Navigatie.propTypes = {
  link1: PropTypes.element,
  link2Url: PropTypes.string,
  link5: PropTypes.element,
  link1Url: PropTypes.string,
  link2: PropTypes.element,
  link3Url: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.element,
  link5Url: PropTypes.string,
  link4Url: PropTypes.string,
  link4: PropTypes.element,
  action1: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navigatie
