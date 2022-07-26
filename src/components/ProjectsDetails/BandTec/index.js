import './bandTec.css';
import logoBandTec from "../../../assets/projects/logoBandTec.png";
import { NavBar } from "../../NavBar";
import { Footer } from "../../Footer";

export default function BandTec() {
  return (

    <div>
      <section>
        <NavBar />
      </section>
      <section className="project-mockup">
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
            <img className=" ls-is-cached lazyloaded" src={logoBandTec} />
            <h3>Faculdade de tecnologia Bandtec</h3>
            Estagiário/Aluno
          </div>
          <p>Medidor de temperatura com arduino</p>
          <h3>Oque foi feito:</h3>
          <p>Um projeto em equipe envolvendo Iot de um medidor de temperatura com arduino (LM35).</p>
          <p> Utilizando Web Forms, banco de dados SQLServer, ferramentas para organização e gerenciamento como trello e Git, e metodologias ágeis como scrum e sprint backlog.</p>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>

  );
}