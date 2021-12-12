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
      title:"Site",
      type:'deposit',
      category:'Desenvolvimento de site',
      amount:6000,
      createdAt:new Date('2021-12-12 20:08:00'),
    },
    {
      id:2,
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

    this.get('/trasanctions', ()=>{
      return this.schema.all('transaction');
    }) //requição de busca de listagem
    this.post('/trasanctions',(schema,request)=>{

      const data = JSON.parse(request.requestBody)

      return schema.create('trasaction',data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
