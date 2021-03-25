import { Container } from './styles';
import { TransactionsTable } from '../transactionsTable';
import { Summary } from '../summary';



export function Dashboard() {
	
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}
