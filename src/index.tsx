import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  // db criado pelo miragejs
  models: {
    transaction: Model, // nome da tabela do db
  },

  // informações que serão precarregadas no db (por padrão o db vem vázio)
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Manutenção de equipamentos',
          type: 'deposit',
          category: 'Freelance',
          amount: 1500,
          createdAt: new Date('2021-02-21 09:00:00')
        },
        {
          id: 2,
          title: 'Churrasco',
          type: 'withdraw',
          category: 'Comida',
          amount: 40,
          createdAt: new Date('2021-02-23 09:00:00')
        }

      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {

      //retorna todos as transações do db.
      return this.schema.all('transaction');

    });

    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody);

      // retorna para o db na tabela transaction os dados que estão em data.
      return schema.create('transaction', data);
    });
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
