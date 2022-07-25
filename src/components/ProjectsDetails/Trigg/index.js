import './trigg.css';
import projetoTrigg from "../../../assets/projects/logoTrigg.webp";
import { NavBar } from "../../NavBar";



export default function Trigg() {
  return (

    <div>
      <section>
        <NavBar />
      </section>
      <section className="project-mockupTrigg">
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
            <img className=" ls-is-cached lazyloaded" src={projetoTrigg} />
            <h3>Trigg</h3>
            Estagio Front-End
          </div>
          <p>Muito mais que cartões emitidos! Experiências vividas, sonhos realizados e muita história para contar! Somos uma Fintech que veio para tornar seu relacionamento com o dinheiro mais fácil e acessível. Para isso, usamos tecnologia digital aplicada de uma maneira inteligente ao mundo das finanças. Queremos mudar o mercado financeiro mundial e por isso estamos reinventando os negócios tradicionais com um cartão digital.</p>
          <h3>Oque foi feito:</h3>
          <p>Realizei a manutenção e criação de landPages e do site além de emails marketing, utilizando como linguagens HTML, SASS, JS, Vue.js, Blade...</p>
          <p>Na parte de organização e gestão, foi utilizado Monday jutamente com a metodologia agil scrum</p>
          <p>Para versionamento foi utilizado Avocode e GitLab.</p>
        </div>
      </section>
    </div>

  );
}