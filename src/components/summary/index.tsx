import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext, useEffect } from 'react';
import { api } from '../../services/api';
import { TransactionContext } from '../../TransactionsContext';

export function Summary() {
  const data = useContext(TransactionContext);

  console.log(data);

  useEffect(() => {
    api.get('transactions')
      .then(response => (response.data));
  }, []);

  return(
    <Container>
      <div>
       <header>
         <p>Entradas</p>
         <img src={incomeImg} alt="Entradas"/>
       </header>
       <strong>R$ 1000,00</strong>
      </div>
      <div>
       <header>
         <p>Saidas</p>
         <img src={outcomeImg} alt="Saidas"/>
       </header>
       <strong>R$ 500,00</strong>
      </div>
      <div className="highlight-background">
       <header>
         <p>Totais</p>
         <img src={totalImg} alt="Totais"/>
       </header>
       <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}
