import styles from './About.module.css'

function About(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>Sobre mim</div>
                </div>
                <div className={styles.text}>
                <p>
                Sou técnica em informática pelo Instituto Federal do Piauí e atualmente curso Ciência da Computação na Universidade Estadual do Piauí, campus Piripiri. Ao longo da minha formação, desenvolvi conhecimentos em diversas linguagens de programação, como Python, Pascal, C e Java, além de experiência em banco de dados, testes unitários, metodologias ágeis e inteligência artificial. Também atuei no desenvolvimento web utilizando HTML, CSS, JavaScript e TypeScript, com experiência prática no framework React, e possuo habilidades em desenvolvimento mobile com Flutter.
                </p>
                <br />
                <p>
                Atualmente, atuo como estagiária no Núcleo de Processamento de Dados da universidade, participando de projetos de auditoria de redes e segurança. Essa experiência me proporcionou vivência prática em ambientes corporativos, fortalecendo minha capacidade de análise, organização e resolução de problemas.
                </p>
                <br/>
                <p>
                Sou dedicada e comprometida com meus projetos e estudos, sempre em busca de novos conhecimentos, tanto na área de tecnologia quanto em outros campos. Atualmente, concentro meus esforços em aprofundar conhecimentos em cibersegurança e redes. Além disso, sou uma leitora assídua e tenho paixão por filmes, natureza, música e, claro, tecnologia.
                </p>
                </div>
            </div>  
        </div>
    )
}

export default About;