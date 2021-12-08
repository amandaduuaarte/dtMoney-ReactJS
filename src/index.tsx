import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs'
import {App} from './App';

createServer({
  routes(){
    this.namespace = 'api'; //pega todas chamadas com api e direciona ao miragejs

    this.get('/trasanctions', ()=>{
      return [
        {
          id:1,
          title: 'Transaction 1 ',
          amount: 400, 
          type:'deposit',
          category:'Food',
          createdAt: new Date()
        }
      ]
    }) //requição de busca de listagem
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
