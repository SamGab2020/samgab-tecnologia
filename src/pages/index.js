import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import logotipo from '../assets/images/logo_no_cel.png';
import pic1 from '../assets/images/pic_infocel.jpg';
import pic2 from '../assets/images/pic_radar_ps4.jpg';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <header id="header">
      <div className="content">
        <h1>
          <a href="/#">{config.heading}</a>
        </h1>
        <p>{config.subHeading}</p>
        <ul className="actions">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button icon fa-chevron-down">
                Serviços
              </a>
            </Scroll>
          </li>
          <li>
            <Scroll type="id" element="two">
              <a href="#one" className="button icon fa-chevron-down">
                Produtos
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <div className="image phone">
        <div className="inner">
          <img src={logotipo} alt="" />
        </div>
      </div>
    </header>

    <section id="one" className="wrapper style2 special">
      <header className="major">
        <h2>Serviços</h2>
      </header>
	  <div className="inner alt">
	    <section className="special">
          <ul className="icons labeled">
            <li>
              <span className="icon fa-whatsapp">
                <span className="label">Orçamento gratuito via Whatsapp</span>
              </span>
            </li>
            <li>
              <span className="icon fa-android">
                <span className="label">Desenvolvimento de aplicativos mobile</span>
              </span>
            </li>
            <li>
              <span className="icon fa-desktop">
                <span className="label">Desenvolvimento de aplicativos desktop</span>
              </span>
            </li>
            <li>
              <span className="icon fa-download">
                <span className="label">Produtos com downloads gratuitos!</span>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </section>
	
    <section id="two" className="wrapper">
	  <header className="major">
      <h2>Produtos</h2>
      </header>
      <div className="inner alt">
        <section className="spotlight">
          <div className="image">
            <img src={pic1} alt="" />
          </div>
          <div className="content">
            <h3>Infocel</h3>
            <p>
            Aplicativo bastante simples e não invasivo, que permite a consulta
            sobre as configurações básicas do seu aparelho celular. Com este
            software você vai entender se o seu celular ainda está atualizado
            e se realmente tem as configurações que te informaram no momento da
            compra!
            </p>
			<ul className="actions">
			  <li>
				<a
				  href="https://github.com/SamGab2020/infocel/raw/master/infocel.apk"
				  className="button icon fa-download"
				>
				  Download - Infocel
				</a>
			  </li>
			</ul>
            <br />
          </div>
        </section>
		<section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h3>Radar PS4</h3>
            <p>
              Aplicativo para você rodar diretamente no seu computador e receber
			  uma lista atualizada com todas as promoções de games de PlayStation 4!
			  
            </p>
			<ul className="actions">
			  <li>
				<a
				  href="http://www.google.com"
				  className="button icon fa-download"
				>
				  Download - Radar PS4
				</a>
			  </li>
			</ul>
          </div>
        </section>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
