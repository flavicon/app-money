import { Container } from './styles';

export function TransactionsTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="saida">- R$ 500</td>
            <td>Casa</td>
            <td>20/02/2020</td>
          </tr>
          <tr>
            <td>Site</td>
            <td className="entrada">R$ 11200</td>
            <td>Casa</td>
            <td>20/02/2020</td>
          </tr>
        </tbody>
      </table>      
    </Container> 
  )
}
