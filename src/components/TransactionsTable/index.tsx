import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

export function TrasanctionsTable (){
  useEffect(()=>{
    api.get('trasanctions')
    .then(res=> console.log(res.data))
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit"> R$1220</td>
            <td> Desenvolvimento</td>
            <td> 08/12/2021</td>
          </tr>
          <tr>
            <td>Alugue</td>
            <td className="withDraw">- R$700</td>
            <td>Moradia</td>
            <td> 08/12/2021</td>
          </tr>
        </tbody> 
      </table>
    </Container>
  )
}