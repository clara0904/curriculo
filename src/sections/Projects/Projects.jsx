import styles from './Projects.module.css'
import ProjectsCard from '../../components/Card/ProjectsCard/ProjectsCard';
import les from '../../assets/les.png'
import claraverso from '../../assets/claraverso.png'
import planner from '../../assets/planner.png'
import receitoteca from '../../assets/receitoteca.jpg'
import connectcar from '../../assets/connectcar.png'
import jogodavelha from '../../assets/jogodavelha.jpeg'

function Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Projetos</div>
                <div className={styles.cards}>
                    <ProjectsCard title="ClaraVerso" description="ClaraVerso é um blog desenvolvido em Angular para publicação de resenhas de livros, filmes e séries. A aplicação permite visualizar avaliações com sistema de estrelas e acessar páginas dinâmicas de detalhes para cada resenha." image={claraverso} link={'https://claraverso-nine.vercel.app/'} />
                    <ProjectsCard title="Receitoteca" description="O Receitoteca é um aplicativo desenvolvido em Flutter que oferece uma biblioteca de receitas. Integrado à TheMealDB API, o app utiliza Dio para requisições HTTP e Provider para gerenciamento de estado, garantindo uma experiência dinâmica e responsiva." image={receitoteca}  link={'https://github.com/clara0904/receitoteca'}/>                
                    <ProjectsCard title="ConnectCar" description="O ConnectCar é um aplicativo em Flutter para gerenciar aluguéis de carros. Permite cadastrar clientes e veículos, realizar aluguéis e controlar datas e valores, utilizando Hive, Drift e Riverpod para armazenamento e gerenciamento eficiente dos dados." image={connectcar}  link={'https://github.com/clara0904/connectcar'}/>  
                    <ProjectsCard title="Jogo da Velha" description="Aplicativo de Jogo da Velha desenvolvido em Flutter. O app mantém o histórico completo das partidas, utilizando Drift para armazenar e gerenciar os dados localmente,." image={jogodavelha}  link={'https://github.com/clara0904/AppJogodaVelha'}/>   
                    <ProjectsCard title="Portfólio LES" description="Portfólio do Laboratório de Engenharia de Software - LES. Projeto desenvolvido em equipe, utilizando os frameworks React e Nodejs, além da metodologia ágil Scrum e boas práticas de desenvolvimento." image={les}  link={'https://les-portfolio.vercel.app/'}/>
                    <ProjectsCard title="Plann.er" description="Planejador de viagens feito durante o NLW Journey na trilha de React, com Typescript, tooling com Vite, interface responsiva com TailwindCSS e consumo de API Node.js." image={planner}  link={'https://github.com/clara0904/Plann.er'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;