import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './diensten.css'

const Diensten = (props) => {
  return (
    <div
      id={props.dienstenId}
      className="diensten-layout251 thq-section-padding"
    >
      <div className="diensten-max-width thq-section-max-width">
        <div className="thq-flex-row diensten-section-title">
          <div className="diensten-column thq-flex-column">
            <h2 className="thq-heading-2 diensten-text10">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="diensten-text17">Diensten</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="diensten-content1">
          <div className="diensten-row1 thq-flex-row">
            <div className="diensten-feature11 thq-flex-column">
              <div className="diensten-feature1-image1 thq-img-ratio-4-3">
                <img
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  className="diensten-image1"
                />
              </div>
              <div className="diensten-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="diensten-text12">
                        Voeren van de complete administratie
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="diensten-text13">
                        Zorgeloos uw volledige administratie uit handen gegeven.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="diensten-feature21 thq-flex-column">
              <div className="diensten-feature2-image1 thq-img-ratio-4-3">
                <img
                  src={props.imageSrc1}
                  alt={props.imageAlt1}
                  className="diensten-image2"
                />
              </div>
              <div className="diensten-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="diensten-text11">
                        Voeren van delen van de administratie
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="diensten-text16">
                        Ondersteuning op maat voor specifieke administratieve
                        taken.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="diensten-feature31 thq-flex-column">
              <div className="diensten-feature3-image1 thq-img-ratio-4-3">
                <img
                  src={props.imageSrc2}
                  alt={props.imageAlt2}
                  className="diensten-image3"
                />
              </div>
              <div className="diensten-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="diensten-text14">BTW-aangifte</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="diensten-text15">
                        Tijdige en correcte aangiftes. Per maand of per
                        kwartaal. Dit in combinatie met het voeren van
                        uw administratie.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="diensten-content5">
          <div className="diensten-row2 thq-flex-row">
            <div className="diensten-feature12 thq-flex-column">
              <div className="diensten-feature1-image2 thq-img-ratio-4-3">
                <img
                  src={props.imageSrc4}
                  alt={props.imageAlt4}
                  className="diensten-image4"
                />
              </div>
              <div className="diensten-content6 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title1 ?? (
                    <Fragment>
                      <span className="diensten-text18">
                        Inkomstenbelasting-aangifte
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description1 ?? (
                    <Fragment>
                      <span className="diensten-text19">
                        Uw belastingaangifte eenvoudig en juist geregeld.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="diensten-feature22 thq-flex-column">
              <div className="diensten-feature2-image2 thq-img-ratio-4-3">
                <img
                  src={props.imageSrc3}
                  alt={props.imageAlt3}
                  className="diensten-image5"
                />
              </div>
              <div className="diensten-content7 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title1 ?? (
                    <Fragment>
                      <span className="diensten-text20">
                        <span>Advisering</span>
                        <br></br>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description1 ?? (
                    <Fragment>
                      <span className="diensten-text24">
                        Praktische en heldere financiële adviezen voor uw
                        situatie.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="diensten-feature32 thq-flex-column">
              <div className="diensten-feature3-image2 thq-img-ratio-4-3">
                <img
                  src={props.imageSrc5}
                  alt={props.imageAlt5}
                  className="diensten-image6"
                />
              </div>
              <div className="diensten-content8 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title1 ?? (
                    <Fragment>
                      <span className="diensten-text25">
                        Hulp bij het opstarten van uw onderneming
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description1 ?? (
                    <Fragment>
                      <span className="diensten-text26">
                        {' '}
                        Een vliegende start met een solide financiële basis.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="thq-body-small">
        {props.feature1Description2 ?? (
          <Fragment>
            <span className="diensten-text27">
              Werkzaamheden kunnen uitgevoerd worden op basis van een uurtarief
              ad 70,50 euro per uur (ex BTW). Ook is het mogelijk een vaste
              prijs af te spreken.
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Diensten.defaultProps = {
  feature2Title: undefined,
  feature1Title: undefined,
  feature1Description: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
  sectionTitle: undefined,
  feature1Title1: undefined,
  feature1Description1: undefined,
  feature2Title1: undefined,
  feature2Description1: undefined,
  feature3Title1: undefined,
  feature3Description1: undefined,
  feature1Description2: undefined,
  imageSrc: '/20492-1400w.jpg',
  imageAlt: 'image',
  imageSrc1: '/2147772282-300h.jpg',
  imageAlt1: 'image',
  imageSrc2: '/385-400w.jpg',
  imageAlt2: 'image',
  imageSrc3: '/advies%20-300h.png',
  imageAlt3: 'image',
  imageSrc4: '/inkomsten-1400w.png',
  imageAlt4: 'image',
  imageSrc5: '/financieel-400w.png',
  imageAlt5: 'image',
  dienstenId: '',
}

Diensten.propTypes = {
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1Title1: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature2Title1: PropTypes.element,
  feature2Description1: PropTypes.element,
  feature3Title1: PropTypes.element,
  feature3Description1: PropTypes.element,
  feature1Description2: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt5: PropTypes.string,
  dienstenId: PropTypes.string,
}

export default Diensten
