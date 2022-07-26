import "./raia.css"
import projetRD from "../../../assets/projects/logoRd.png";
import { NavBar } from "../../NavBar";
import { Footer } from "../../Footer";



export default function Raia() {
  return (

    <div>
      <section>
        <NavBar />
      </section>
      <section className="project-mockupRD">
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
            <img className=" ls-is-cached lazyloaded" src={projetRD} />
            <h3>RaiaDrogasil - TC sem Ablet</h3>
            Desenvolvedor Front-End - Pleno
          </div>
          <p>TC sem Ablet é um projeto interno desenvolvido pela RaiaDrogasil, utilizado por mais de 1.400 lojas no Brasil sendo um sistema voltando para uso dos farmacêuticos no balcão das lojas</p>
          <h3>O que foi feito:</h3>
          <p>Realizei junto à equipe de Front-end a refatoração do sistema legado, utilizamos nesta refatoração o esquema de micro front-ends com single spa e criamos uma própria lib onde mantivemos todos os padrões visual do projeto.</p>
          <p>Na parte de organização e gestão, foi utilizado Asana juntamente com a metodologia ágil scrum, onde tínhamos um sistema de dailys. E rodadas quinzenais para Planning e Retro.</p>
          <p>Para versionamento e prototipagem, Figma e Gitlab foram utilizados com BEM para manter um padrão de nomenclatura do código.</p>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>

  );
}