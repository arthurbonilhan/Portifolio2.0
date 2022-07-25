import "./raia.css"
import projetRD from "../../../assets/projects/logoRd.png";
import { NavBar } from "../../NavBar";



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
          <p>TC sem Ablet e um projeto interno da RaiaDrogasil, onde e utilizado em mais de 1.400 lojas sendo algo voltando para os farmacéuticos.</p>
          <h3>Oque foi feito:</h3>
          <p>Realizei junto a equipe de Front-end a refatoração do sistema legado, Utilizamos nesta refatoração o esquema de micro front-ends com single spa, além disso criamos uma própria lib onde mantiamos todos os padrões visual do projeto.</p>
          <p>Na parte de organização e gestão, foi utilizado Jira jutamente com a metodologia agil scrum, onde tinhamos um sistema de dailys diarios e uma rodada semanal para Feedbacks. E uma quinzenal para Planning e Retro.</p>
          <p>Para versionamento foi utilizado Figma e GitLab onde utilizamos BEM para manter um padrão de nomenclatura do codigo.</p>
        </div>
      </section>
    </div>

  );
}