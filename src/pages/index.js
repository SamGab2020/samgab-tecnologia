import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import screen from '../assets/images/screen.png';
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
            <a
              href="https://github.com/anubhavsrivastava/gatsby-starter-fractal/archive/master.zip"
              className="button primary icon fa-download"
            >
              Download Starter
            </a>
          </li>
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button icon fa-chevron-down">
                Expertise
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <div className="image phone">
        <div className="inner">
          <img src={screen} alt="" />
        </div>
      </div>
    </header>

    <section id="one" className="wrapper style2 special">
      <header className="major">
        <h2>
          Consultoria em Tecnologia da Informação
          <br />
          Desenvolvimento de soluções para celulares e computadores
        </h2>
      </header>
      <ul className="icons major">
        <li>
          <span className="icon fa-camera-retro">
            <span className="label">Shoot</span>
          </span>
        </li>
        <li>
          <span className="icon fa-refresh">
            <span className="label">Process</span>
          </span>
        </li>
        <li>
          <span className="icon fa-cloud">
            <span className="label">Upload</span>
          </span>
        </li>
      </ul>
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
          </div>
        </section>
        <section className="special">
          <ul className="icons labeled">
            <li>
              <span className="icon fa-camera-retro">
                <span className="label">Ipsum lorem accumsan</span>
              </span>
            </li>
            <li>
              <span className="icon fa-refresh">
                <span className="label">Sed vehicula elementum</span>
              </span>
            </li>
            <li>
              <span className="icon fa-cloud">
                <span className="label">Elit fusce consequat</span>
              </span>
            </li>
            <li>
              <span className="icon fa-code">
                <span className="label">Lorem nullam tempus</span>
              </span>
            </li>
            <li>
              <span className="icon fa-desktop">
                <span className="label">Adipiscing amet sapien</span>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
