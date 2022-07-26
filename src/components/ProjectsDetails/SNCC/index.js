import './sncc.css';
import projetoSNCC from "../../../assets/projects/logoSNCC.png";
import { NavBar } from "../../NavBar";
import { Footer } from "../../Footer";



export default function SNCC() {
  return (

    <div>
      <section>
        <NavBar />
      </section>
      <section className="project-mockupSNCC">
        <div className="overlay"></div>
        <div className="mockup aos-init aos-animate" >
          <div className="screen">
            <div class="content-screen">
              <div className="img" >
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      </section>
      <section className="project-descripton">
        <div className="container">
          <div className="download aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
            <img className=" ls-is-cached lazyloaded" src={projetoSNCC} />
            <h3>SNCC</h3>
            Desenvolvedor Front-End - Junior
          </div>
          <p>Mais que assessoria na busca de informações cadastrais para análise de crédito, o SNCC esforça-se continuamente, através do empenho e experiência de seus profissionais, para colaborar com cada negócio, oferecendo soluções estruturadas a partir das suas necessidades.</p>
          <h3>O que foi feito:</h3>
          <p>Participação na criação, manutenção e arquitetura do Website do SNCC, Utilizando HTML, SASS, JS, e PHP </p>
          <p>Na parte de organização e gestão, foi utilizado Trello juntamente com a metodologia ágil scrum, onde tínhamos um sistema de dailys e rodadas quinzenais para Planning e Retro</p>
          <p>Para versionamento e prototipagem, Figma e Gitlab foram utilizados com RSCSS para manter um padrão de nomenclatura do código.</p>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>

  );
}