import styles from './Certifications.module.css';
import TextCard from '../../components/Card/TextCard/TextCard';

function Certifications(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Formação</div>
                <div className={styles.cards}>
                    <TextCard title={'Técnica em Informática (2019-2021)'} description={'Obtive conhecimento na linguagem de programação Python, além de temas como banco de dados, redes,  versionamento de código, entre outros tópicos na área de tecnologia.'} college={'IFPI'}/>
                    <TextCard title={'Ciência da Computação (2022- em andamento)'} description={'Até o momento, obtive conhecimento em diversas linguagens de programação, desenvolvimento web, banco de dados, metodologia científica, dentre outros tópicos essenciais na área de computação.'} college={'UESPI'}/>
                </div>
                
                <div className={styles.division}></div>

                <div className={styles.title}>Formação complementar</div>
                <div className={styles.cards}>
                    <TextCard title={'Nivelamento do Programa Hackers do Bem - Formação em Cibersegurança (2024)'} description={'Conhecimento básico em cibersegurança, arquitetura de computadores, redes, sistemas operacionais, lógica de programação e scripts.'} college={'Rede Nacional de Ensino e Pesquisa'}/>
                    <TextCard title={'Segurança em tecnologia da informação (2024)'} description={'Obtive conhecimentos teóricos da área de cibersegurança, incluindo seus mecanismos e políticas de segurança, além de tipos de ataques.'} college={'Fundação Bradesco'}/>
                    <TextCard title={'Projetos de Sistemas de TI (2024)'} description={'Curso básico teórico sobre ciclo de desenvolvimento do software, metodologias ágeis e gerenciamento de projetos de software.'} college={'Fundação Bradesco'}/>
                    <TextCard title={'Azure Infra Girls (2024)'} description={'Mentoria em azure exclusivamente para mulheres, oferecido pela Microsoft em parceria com a WoMakersCode.'} college={'Mais Mulheres em Tech'}/>
                </div>
            </div>
            
        </div>
    )
}

export default Certifications;