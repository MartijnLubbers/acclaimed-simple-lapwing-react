import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './over-mij.css'

const OverMij = (props) => {
  return (
    <div
      id={props.overMijId}
      className="over-mij-container thq-section-padding"
    >
      <div className="over-mij-max-width thq-section-max-width">
        <div className="over-mij-content thq-flex-column">
          <ul className="over-mij-ul thq-flex-column">
            <li className="over-mij-li1 list-item thq-flex-column">
              <h2 className="over-mij-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="over-mij-text48">Over Fincis</span>
                  </Fragment>
                )}
              </h2>
              <p className="over-mij-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="over-mij-text10">
                      Fincis is een administratiekantoor dat zich richt op
                      startende ondernemingen, ZZP-ers en MKB-bedrijven. Ik kan
                      u adviseren met betrekking tot uw bedrijf. Ook kan ik
                      delen van- of de complete administratie voor u voeren en
                      natuurlijk de btw-aangiftes verzorgen en de
                      inkomstenbelasting-aangifte voor u doen. Ik werk
                      zorgvuldig en accuraat en heb veel werkervaring in de
                      administratieve branche. Ik heb gekozen om te werken met
                      het boekhoudpakket Exact vanwege de betrouwbaarheid van
                      dit pakket en de vele mogelijkheden.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="over-mij-heading2 thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="over-mij-text49">Over Mij</span>
                  </Fragment>
                )}
              </h3>
              <p className="over-mij-content2 thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="over-mij-text11">
                      <span>
                        Hoi! Ik ben Ciska Lubbers en heb een brede financiële
                        achtergrond dankzij mijn opleiding en werkervaring. Na
                        mijn VWO en HEAO-Bedrijfseconomie heb ik meer dan 24
                        jaar gewerkt in verschillende financiële functies. Dit
                        heeft me veel kennis en vaardigheden opgeleverd die ik
                        dagelijks met plezier inzet.
                      </span>
                      <br></br>
                      <br></br>
                      <span>Ik heb gewerkt in de volgende functies:</span>
                      <br></br>
                      <br></br>
                      <span>
                        • Assistent Accountant bij een groot Accountantskantoor
                      </span>
                      <br></br>
                      <span>
                        • Assistent Accountant bij een Administratiekantoor
                      </span>
                      <br></br>
                      <span>
                        • Hoofd Administratie en IT bij een Milieuadviesbureau
                      </span>
                      <br></br>
                      <span>
                        • Projectcoördinator bij een groot Ingenieursbureau
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        En in al deze rollen heb ik veel ervaring opgedaan,
                        waaronder:
                      </span>
                      <br></br>
                      <br></br>
                      <span>• Het voeren van complete administraties</span>
                      <br></br>
                      <span>• Het maken van jaarrekeningen</span>
                      <br></br>
                      <span>
                        • Het verzorgen van btw-aangiften en aangiften
                        inkomstenbelasting
                      </span>
                      <br></br>
                      <span>• Het werken met belastingregels</span>
                      <br></br>
                      <span>
                        • Het administratief en organisatorisch coördineren van
                        grote projecten
                      </span>
                      <br></br>
                      <span>
                        • Leidinggeven aan een financiële administratie
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Daarnaast ben ik goed thuis in verschillende financiële
                        pakketten, zoals Exact, SAP R3, BaanERP, en natuurlijk
                        Microsoft Office.
                      </span>
                      <br></br>
                      <span>
                        Heeft u hulp nodig met uw administratie of
                        belastingaangifte? Neem gerust contact op!
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

OverMij.defaultProps = {
  content1: undefined,
  content2: undefined,
  heading1: undefined,
  heading2: undefined,
  overMijId: '',
}

OverMij.propTypes = {
  content1: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  heading2: PropTypes.element,
  overMijId: PropTypes.string,
}

export default OverMij
