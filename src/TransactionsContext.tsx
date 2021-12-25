import{createContext,useState,useEffect} from 'react';
import { api } from './services/api';

interface Transaction {
  id:number;
  title:string;
  amount:number;
  createdAt:string;
  type:string;
  category:string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; 
//pega todos os do Transaction menos o id e createdAt 
interface TransactionsProviderProps{
  children: React.ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transactions:TransactionInput) => Promise<void>;
}
export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  );


export function TransactionsProvider({children} : TransactionsProviderProps){
  const [transactions, setTrasanctions] = useState<Transaction[]>([]);

  useEffect(()=>{
    api.get('transactions')
    .then(res=> setTrasanctions(res.data.transactions))
  },[])

  async function createTransaction(transactionInput:TransactionInput){
    const response =  await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(), 
    })
    const {transaction} = response.data

    setTrasanctions([
      ...transactions,
      transaction,
    ]);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}