import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


interface Transaction {
  id:number;
  title:string;
  description:string;
  amount:number;
  createdAt:string;
  type:string;
  category:string;
}
export function TrasanctionsTable (){
  const [trasanctions, setTrasanctions] = useState<Transaction[]>([]);

  useEffect(()=>{
    api.get('trasanctions')
    .then(res=> setTrasanctions(res.data.transactions))
  },[])
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead> 
        <tbody>
          {trasanctions.map(transaction => {
            return (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}> 
            {new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency:'BRL'
            }).format(transaction.amount )}
            </td>
            <td> {transaction.category}</td>
            <td>
            {new Intl.DateTimeFormat('pt-BR').format(
              new Date (transaction.createdAt) )}
            </td>
          </tr>
            );
          })}
        </tbody> 
      </table>
    </Container>
  )
}