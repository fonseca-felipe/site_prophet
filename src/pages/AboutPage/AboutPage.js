import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./AboutPage.css";
import logo from "../../assets/logo.png";
import capes from "../../assets/capes.jpg";

function AboutPage(props) {
  return (
    <div className="about-container">
      <NavBar activePage="about" />
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="text">
          <h1 className="my-5">About</h1>
          <span className="py-4">
            Application developed by Victor Aguiar Evangelista de Farias and
            Joao Brainer Clares de Andrade
          </span>
          {/* <span className="py-2">In association with Hospital Geral de Fortaleza (Brazil) and Universidade Federal de São Paulo (Brazil) </span> */}
          <b className="py-2">
            This project is financed in part by the Coordenação de
            Aperfeiçoamento de Pessoal de Nível Superior - Brasil (CAPES) -
            Finance Code 001 / 88881.189495/2018-01
          </b>
          <img src={capes} alt="" />
          <span className="py-4">
            Acknowledgements Gisele Sampaio Silva, Jay P Mohr, Fabricio Oliveira
            Lima, Joao Jose Carvalho, Pedro Braga Neto, Camila Rodrigues
            Nepomuceno, Levi Coelho Maia, Leonardo Barreira Portela, Flavio
            Rezende Moura Filho, Natalia Buitrago, Caroline Pinho and Nursing
            staff (Stroke Unit, Hospital Geral de Fortaleza)
          </span>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            <img
              alt="Licença Creative Commons"
              style={{ "border-width": 0 }}
              src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"
            />
          </a>
          <br />
          <span
            href="http://purl.org/dc/dcmitype/InteractiveResource"
            property="dct:title"
            rel="dct:type"
          >
            Predictive score of hemorrhagic transformation in patients not
            submitted to reperfusion therapies
          </span>{" "}
          de{" "}
          <a
            href="www.prophet-score.com"
            property="cc:attributionName"
            rel="cc:attributionURL"
          >
            PROpHET
          </a>{" "}
          está licenciado com uma Licença {" "}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            Creative Commons - Atribuição-Não Comercial 4.0 Internacional
          </a>{" "}
          .
          <br />
          Baseado no trabalho disponível em {" "}
          <a href="www.prophet-score.com" rel="dct:source">
            www.prophet-score.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
