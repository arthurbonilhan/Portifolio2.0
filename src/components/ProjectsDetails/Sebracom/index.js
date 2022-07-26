import './sebracom.css';
import { NavBar } from "../../NavBar";
import { Footer } from "../../Footer";



export default function Sebracom() {
  return (

    <div>
      <section>
        <NavBar />
      </section>
      <section className="project-mockupSebracom">
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
            <h3>Sebracom</h3>
            Desenvolvedor Front-End - Junior
          </div>
          <h3>O que foi feito:</h3>
          <p>Participação na criação, manutenção e arquitetura do Website do Sebracom, Utilizando HTML, SASS, JS, e PHP </p>
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