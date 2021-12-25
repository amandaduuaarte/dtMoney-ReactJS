import { Container} from './styles';
import {Summary} from '../Summary/index';
import { TrasanctionsTable } from '../TransactionsTable';
export function Dashboard (){
  return (
   <Container>
     <Summary/>
     <TrasanctionsTable/>
   </Container>
  )
}