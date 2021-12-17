import {useContext} from 'react'
import {Container} from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TrasactionsContext } from '../../TransactionsContext';
export function Summary (){
  const transactions = useContext(TrasactionsContext)

  console.log(transactions)
  return(
   <Container> 
     <div>
       <header>
         <p> Entradas</p>
         <img src={incomeImg} alt="Entradas icon"/>
       </header>
       <strong> R$10000 </strong>
     </div>
     <div>
       <header>
         <p> Saidas</p>
         <img src={outcomeImg} alt="Saidas icon"/>
       </header>
       <strong>-R$100 </strong>
     </div>
     <div>
       <header>
         <p> Total</p>
         <img src={totalImg} alt="Total"/>
       </header>
       <strong>R$1000 </strong>
     </div>
   </Container>
  )
}