import styles from './Experience.module.css'

function Experience() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.title}>Experiência</h2>

                <div className={styles.item}>
            
                    <div className={styles.itemContent}>
                    <h3>Estagiária - Núcleo de Processamento de Dados</h3>
                    <span>UESPI | 2024 - 2026</span>

                    <p>
                        Atuação em monitoramento e suporte à infraestrutura de rede institucional,
                        manutenção e configuração de equipamentos de rede, atuação em cabeamento e
                        suporte em fibra óptica, além do gerenciamento de ambientes virtualizados com Proxmox.
                    </p>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default Experience;