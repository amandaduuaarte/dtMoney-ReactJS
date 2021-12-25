import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer({
  models:{
    transaction:Model, //aqui é para a adição de dados no Bd do mirage
  },
  seeds(server){//Deixar valores já cadastrados no banco
    
    server.db.loadData ({
    transactions:[
    {
      id:1,
      title:"Casa",
      type:'withdraw',
      category:'Pagamento do aluguel',
      amount:1200,
      createdAt:new Date('2021-12-20 20:08:00'),
    } 
  ]
  })
  },
  routes(){
    this.namespace = 'api'; //pega todas chamadas com api e direciona ao miragejs

    this.get('/transactions', ()=>{
      return this.schema.all('transaction');
    }) //requição de busca de listagem
    this.post('/transactions',(schema,request)=>{

      const data = JSON.parse(request.requestBody)

      return schema.create('transaction',data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
