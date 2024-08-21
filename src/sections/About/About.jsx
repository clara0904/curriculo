import styles from './About.module.css'

function About(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>Sobre mim</div>
                </div>
                <div className={styles.text}>
                <p>Sou técnica em informática pelo Instituto Federal do Piauí e atualmente estou cursando Ciência da Computação na Universidade Estadual do Piauí, campus Piripiri. Durante minha formação, adquiri conhecimentos em diversas linguagens de programação, como Python, Pascal, C e Java, além de ter escrito um artigo intitulado <a href={'https://github.com/clara0904/Artigo'} target="_blank" rel="noopener noreferrer"><u>"Algoritmo de predição e personalização da experiência online do usuário"</u></a>. Também possuo experiência em banco de dados, testes unitários, metodologias ágeis e desenvolvimento web utilizando HTML, CSS, JavaScript e TypeScript.</p><br />
                <p>Minha organização e atenção aos detalhes fazem com que eu me identifique muito com a área de gestão de projetos, na qual adquiri experiência atuando como Scrum Master no projeto Portfólio LES, em que também desempenhei o papel de desenvolvedora frontend, utilizando o framework React.</p><br/>
                <p>Sou extremamente dedicada aos meus projetos e estudos, sempre em busca de novos conhecimentos, tanto na área de tecnologia quanto em outras áreas do saber, atualmente estou dedicada a estudar as áreas de cibersegurança e redes. Sou uma leitora assídua, apaixonada por filmes, natureza, música e, claro, por tecnologia.</p>
                </div>
            </div>  
        </div>
    )
}

export default About;