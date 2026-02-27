import styles from './Certifications.module.css';
import TextCard from '../../components/Card/TextCard/TextCard';

function Certifications(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Formação</div>
                <div className={styles.cards}>
                    <TextCard title={'Técnica em Informática (2019-2021)'} description={'Obtive conhecimento na linguagem de programação Python, além de temas como banco de dados, redes,  versionamento de código, entre outros tópicos na área de tecnologia.'} college={'IFPI'}/>
                    <TextCard title={'Ciência da Computação (2022- em andamento)'} description={'Até o momento, obtive conhecimento em diversas linguagens de programação, desenvolvimento web e mobile, banco de dados, inteligência artifical, dentre outros tópicos essenciais na área de computação.'} college={'UESPI'}/>
                </div>
                
                <div className={styles.division}></div>

                <div className={styles.title}>Formação complementar</div>
                <div className={styles.cards}>
                    <TextCard title={'Defesa de rede (2025)'} description={'Identificação de ameaças, aplicação de princípios de segurança, configuração de mecanismos de proteção e monitoramento de redes para prevenir e mitigar ataques cibernéticos.'} college={'Cisco Networking Academy'}/>
                    <TextCard title={'Nivelamento do Programa Hackers do Bem - Formação em Cibersegurança (2024)'} description={'Conhecimento básico em cibersegurança, arquitetura de computadores, redes, sistemas operacionais, lógica de programação e scripts.'} college={'Rede Nacional de Ensino e Pesquisa'}/>
                    <TextCard title={'Programação para Ciência de Dados (2024)'} description={'No curso de extensão, foram desenvolvidas competências em Python, abrangendo estruturas de controle, funções e estruturas de dados, além de manipulação, análise e visualização de dados com NumPy e Pandas.'} college={'UESPI'}/>
                    <TextCard title={'Azure Infra Girls (2024)'} description={'Mentoria em azure exclusivamente para mulheres, oferecido pela Microsoft em parceria com a WoMakersCode.'} college={'Mais Mulheres em Tech'}/>
                </div>
            </div>
            
        </div>
    )
}

export default Certifications;