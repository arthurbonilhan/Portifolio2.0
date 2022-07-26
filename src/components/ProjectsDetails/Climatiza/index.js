import './climatiza.css';
import projetoSSG from "../../../assets/projects/logoSSG.png";
import { NavBar } from "../../NavBar";
import { Footer } from "../../Footer";

export default function Climatiza() {
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
            <img className=" ls-is-cached lazyloaded" src={projetoSSG} />
            <h3>MuchMore - Samsung Climatiza</h3>
            Desenvolvedor Front-End - Junior
          </div>
          <p>Canal exclusivo dedicado aos profissionais especializados em instalação de ar-condicionado da Samsung.
            O APP Samsung Climatiza oferece vídeos tutoriais, apostilas de treinamentos, suporte à códigos de erro, agendamento de atendimentos,
            calculadora de capacidade e outras ferramentas para auxiliar no dia a dia do instalador.
          </p>
          <h3>O que foi feito:</h3>
          <p>Realizei a manutenção, criação e refatoração
            do app, utilizando como linguagem o React Native, fazendo com que o App fosse híbrido.
            Fui responsável também pelo gerenciamento do aplicativo (upload e testes) nas lojas Apple Store e PlayStore </p>
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