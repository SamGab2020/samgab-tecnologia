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
				Um aplicativo básico, simples e não invasivo, que disponibiliza as principais informações de hardware e software do seu aparelho. Muito útil para que você saiba o poder da máquina que tem em mãos, se o seu equipamento já está defasado ou se pode instalar e jogar aquele game ultra moderno lançado recentemente.
            </p>
			<ul className="actions">
			  <li>
				<a href='https://play.google.com/store/apps/details?id=com.samgab.infocel&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt=		'Disponível no Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png' width="200" height="77" /></a>
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
