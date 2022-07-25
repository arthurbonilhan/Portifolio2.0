import './amazoniaLife.css';
import { NavBar } from "../../NavBar";



export default function AmazoniaLife() {
  return (

    <div>
      <section>
        <NavBar />
      </section>
      <section className="project-mockupLife">
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
            <h3>AmazoniaLife</h3>
            Desenvolvedor Front-End - Junior
          </div>
          <p>Canal para ONG's encontrarem possiveis investidores.</p>
          <h3>Oque foi feito:</h3>
          <p>Participação na criação, manutenção e arquitetura do WebSite do AmaozinaLife, Utilizando HTML, SASS, JS, e PHP </p>
          <p>Na parte de organização e gestão, foi utilizado Trello jutamente com a metodologia agil scrum, onde tinhamos um sistema de dailys diarios. E uma rodada quinzenal para Planning e Retro.</p>
          <p>Para versionamento foi utilizado Figma e GitHub onde utilizamos RSCSS para manter um padrão de nomenclatura do codigo.</p>
        </div>
      </section>
    </div>

  );
}