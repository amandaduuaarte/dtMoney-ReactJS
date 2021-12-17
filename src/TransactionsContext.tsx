import{createContext,useState,useEffect} from 'react';
import { api } from './services/api';

interface Transaction {
  id:number;
  title:string;
  description:string;
  amount:number;
  createdAt:string;
  type:string;
  category:string;
}

interface TransactionsProviderProps{
  children: React.ReactNode;
}
export const TrasactionsContext = createContext<Transaction[]>([]);


export function TransactionsProvider({children} : TransactionsProviderProps){
  const [trasanctions, setTrasanctions] = useState<Transaction[]>([]);

  useEffect(()=>{
    api.get('trasanctions')
    .then(res=> setTrasanctions(res.data.transactions))
  },[])

  return (
    <TrasactionsContext.Provider value={trasanctions}>
      {children}
    </TrasactionsContext.Provider>
  )
}