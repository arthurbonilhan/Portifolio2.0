import './acob.css';
import projetoAcob from "../../../assets/projects/logoAcob.png";
import { NavBar } from "../../NavBar";



export default function Acob() {
  return (

    <div>
      <section>
        <NavBar />
      </section>
      <section className="project-mockupAcob">
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
            <img className=" ls-is-cached lazyloaded" src={projetoAcob} />
            <h3>ACOB</h3>
            Desenvolvedor Front-End - Júnior
          </div>
          <p>A ACOB é especializada em soluções de crédito para pessoa jurídica. Nosso atendimento é personalizado, com segurança e credibilidade. Além da recuperação de crédito, oferecemos serviços como: Consultoria financeira, consultas cadastrais, registros de marcas e patentes, marketing digital, tecnologia e soluções financeiras.</p>
          <h3>Oque foi feito:</h3>
          <p>Participação na criação, manutenção e arquitetura do WebSite do ACOB, Utilizando HTML, SASS, JS, e PHP </p>
          <p>Na parte de organização e gestão, foi utilizado Trello jutamente com a metodologia agil scrum, onde tinhamos um sistema de dailys diarios. E uma rodada quinzenal para Planning e Retro.</p>
          <p>Para versionamento foi utilizado Figma e GitHub onde utilizamos OOCSS para manter um padrão de nomenclatura do codigo.</p>
        </div>
      </section>
    </div>

  );
}