import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.headerLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/visualizarPage">Visualizar Vôos</a>
        </li>
        <li>
          <a href="">Atualizar Vôo</a>
        </li>
        <li>
          <a href="">Deletar Vôo</a>
        </li>
      </ul>
      <h1 className={styles.title}>
        Central de Controle de Vôos
      </h1>
    </header>
  );
};

export default Header;
