import Head from 'next/head';
import Header from './Header';
import visuStyles from '../styles/VisualizarPage.module.css';

// mock de dados da API
const voos = [
  { id: 1, origem: 'São Paulo', destino: 'Rio de Janeiro', data: '2024-05-10' },
  { id: 2, origem: 'Rio de Janeiro', destino: 'Belo Horizonte', data: '2024-05-12' },
];

export default function VisualizarPage() {
    return (
        <div>
            <Head>
                <title>Visualizar Vôos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <div className={visuStyles.container}>
              <h1 className={visuStyles.header}>Visualizar Vôos</h1>

              <table className={visuStyles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {voos.map((voo) => (
                    <tr key={voo.id}>
                      <td>{voo.id}</td>
                      <td>{voo.origem}</td>
                      <td>{voo.destino}</td>
                      <td>{voo.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
    )
}
