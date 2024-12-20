import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigatie from '../components/navigatie'
import Banner from '../components/banner'
import OverMij from '../components/over-mij'
import Diensten from '../components/diensten'
import Contact from '../components/contact'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fincis</title>
        <meta property="og:title" content="Fincis" />
      </Helmet>
      <Navigatie
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text11">Link5</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">Over Mij</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text13">Diensten</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text14">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text15">Algemene Voorwaarden</span>
          </Fragment>
        }
        link4Url="#Contact"
        link3Url="#Diensten"
        link2Url="#Over mij"
        link1Url="#Banner"
      ></Navigatie>
      <Banner
        heading1={
          <Fragment>
            <span className="home-text16">Administratiekantoor Fincis</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text17">
              Fincis is een administratiekantoor dat zich richt op startende
              ondernemingen, ZZP-ers en MKB-bedrijven.
            </span>
          </Fragment>
        }
        bannerId="Banner"
      ></Banner>
      <OverMij
        content1={
          <Fragment>
            <span className="home-text18">
              Fincis is een administratiekantoor dat zich richt op startende
              ondernemingen, ZZP-ers en MKB-bedrijven. Ik kan u adviseren met
              betrekking tot uw bedrijf. Ook kan ik delen van- of de complete
              administratie voor u voeren en natuurlijk de btw-aangiftes
              verzorgen en de inkomstenbelasting-aangifte voor u doen. Ik werk
              zorgvuldig en accuraat en heb veel werkervaring in de
              administratieve branche. Ik heb gekozen om te werken met het
              boekhoudpakket Exact vanwege de betrouwbaarheid van dit pakket en
              de vele mogelijkheden.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text19">
              <span>
                Ik ben Ciska Lubbers en heb een brede financiële achtergrond
                dankzij mijn opleidingen en werkervaring. Na mijn VWO en
                HEAO-Bedrijfseconomie heb ik meer dan 24 jaar gewerkt in
                verschillende financiële functies. Dit heeft me veel kennis en
                vaardigheden opgeleverd die ik dagelijks met plezier inzet.
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
              <span>• Assistent Accountant bij een Administratiekantoor</span>
              <br></br>
              <span>
                • Hoofd Administratie en IT bij een Milieuadviesbureau
              </span>
              <br></br>
              <span>• Projectcoördinator bij een groot Ingenieursbureau</span>
              <br></br>
              <br></br>
              <span>
                En in al deze rollen heb ik veel ervaring opgedaan, waaronder:
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
                • Het administratief en organisatorisch coördineren van grote
                projecten
              </span>
              <br></br>
              <span>• Leidinggeven aan een financiële administratie</span>
              <br></br>
              <br></br>
              <span>
                Daarnaast ben ik goed thuis in verschillende financiële
                pakketten, zoals Exact, SAP R3, BaanERP, en Microsoft Office.
              </span>
              <br></br>
              <span>
                Heeft u hulp nodig met uw administratie of belastingaangifte?
                Neem gerust contact op!
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text56">Over Fincis</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="home-text57">Over Mij</span>
          </Fragment>
        }
        overMijId="Over mij"
      ></OverMij>
      <Diensten
        feature2Title={
          <Fragment>
            <span className="home-text58">
              Voeren van delen van de administratie
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text59">
              Voeren van de complete administratie
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text60">
              Zorgeloos uw volledige administratie uit handen gegeven.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text61">BTW-aangifte</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text62">
              Tijdige en correcte aangiftes. Per maand of per kwartaal. Dit in
              combinatie met het voeren van uw administratie.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text63">
              Ondersteuning op maat voor specifieke administratieve taken.
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="home-text64">Diensten</span>
          </Fragment>
        }
        feature1Title1={
          <Fragment>
            <span className="home-text65">Inkomstenbelasting-aangifte</span>
          </Fragment>
        }
        feature1Description1={
          <Fragment>
            <span className="home-text66">
              Uw belastingaangifte eenvoudig en juist geregeld.
            </span>
          </Fragment>
        }
        feature2Title1={
          <Fragment>
            <span className="home-text67">
              <span>Advisering</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description1={
          <Fragment>
            <span className="home-text71">
              Praktische en heldere financiële adviezen voor uw situatie.
            </span>
          </Fragment>
        }
        feature3Title1={
          <Fragment>
            <span className="home-text72">
              Hulp bij het opstarten van uw onderneming
            </span>
          </Fragment>
        }
        feature3Description1={
          <Fragment>
            <span className="home-text73">
              {' '}
              Een vliegende start met een solide financiële basis.
            </span>
          </Fragment>
        }
        feature1Description2={
          <Fragment>
            <span className="home-text74">
              Werkzaamheden kunnen uitgevoerd worden op basis van een uurtarief
              ad 70,50 euro per uur (ex BTW). Ook is het mogelijk een vaste
              prijs af te spreken.
            </span>
          </Fragment>
        }
        dienstenId="Diensten"
      ></Diensten>
      <Contact
        email1={
          <Fragment>
            <span className="home-text75">ciska@fincis.nl</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text76">
              <span>Haarlerberg 52</span>
              <br></br>
              <span>3453 RG De Meern</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text80">Contact</span>
          </Fragment>
        }
        email11={
          <Fragment>
            <span className="home-text81">
              Heeft u hulp nodig met uw administratie of belastingaangifte? Neem
              gerust contact op!
            </span>
          </Fragment>
        }
        contactId="Contact"
      ></Contact>
      <Footer1
        content3={
          <Fragment>
            <span className="home-text82">
              © 2024 Fincis. All rights reserved.
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text83">Algemene Voorwaarden</span>
          </Fragment>
        }
        content31={
          <Fragment>
            <span className="home-text84">
              <span>KvK nummer: 51872366</span>
              <br></br>
              <span>BTW nummer: NL 107643285B01</span>
            </span>
          </Fragment>
        }
      ></Footer1>
    </div>
  )
}

export default Home
