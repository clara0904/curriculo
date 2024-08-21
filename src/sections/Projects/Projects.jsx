import styles from './Projects.module.css'
import ProjectsCard from '../../components/Card/ProjectsCard/ProjectsCard';
import les from '../../assets/les.png'
import profile from '../../assets/profile.jpg'
import blackjack from '../../assets/blackjack.png'
import planner from '../../assets/planner.png'

function Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Projetos</div>
                <div className={styles.cards}>
                    <ProjectsCard title="Portfólio LES" description="Portfólio do Laboratório de Engenharia de Software - LES. Projeto desenvolvido em equipe, utilizando os frameworks React e Nodejs, além da metodologia ágil Scrum e boas práticas de desenvolvimento." image={les}  link={'https://les-portfolio.vercel.app/'}/>
                    <ProjectsCard title="BlackJack - 21" description="Projeto desenvolvido em Java, com o padrão MVC e testes unitários. É o 'jogo do 21' através do terminal, podendo ter 2 ou mais participantes, com lista de rodadas ao final de cada partida." image={blackjack} link={'https://github.com/clara0904/blackjack21-maria_clara'} />
                    <ProjectsCard title="Plann.er" description="Planejador de viagens feito durante o NLW Journey na trilha de React, com Typescript, tooling com Vite, interface responsiva com TailwindCSS e consumo de API Node.js." image={planner}  link={'https://github.com/clara0904/Plann.er'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;