import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import logotipo from '../assets/images/logo_no_cel.png';
import pic1 from '../assets/images/pic01.jpg';
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
                Expertise
              </a>
            </Scroll>
          </li>
          <li>
            <Scroll type="id" element="two">
              <a href="#one" className="button icon fa-chevron-down">
                Soluções
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
        <h2>Consultoria em Tecnologia da Informação</h2>
        <br />
        <h2>Desenvolvimento de soluções para celulares e computadores</h2>
      </header>
    </section>

    <section id="two" className="wrapper">
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
            e se realmente tem as configurações que te passaram no momento da
            compra!
            </p>
            <br />
          </div>
        </section>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
