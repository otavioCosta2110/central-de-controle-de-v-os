import Head from 'next/head';
import styles from '../styles/Home.module.css';
import VisualizarPage from './visualizarPage';
import Header from './Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Central de Controle de Vôos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>

        <div className={styles.grid}>
          <a href="/visualizarPage" className={styles.card}>
            <h3>Visualizar Vôos </h3>
          </a>

          <a href="" className={styles.card}>
            <h3>Cadastrar Vôos</h3>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Atualizar Vôo</h3>
          </a>

          <a
            className={styles.card}
          >
            <h3>Deletar Vôo</h3>
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
