import { useState } from "react";
import { Dashboard } from "./components/Dashboard/index";
import { Header } from "./components/Header/index";
import {TransactionsProvider} from './hooks/useTransactions';
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/newTransactionModal";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  function handlecloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  } 
  return (
    <TransactionsProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard/>
     <NewTransactionModal 
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handlecloseNewTransactionModal}/>
     <GlobalStyle/>
    </TransactionsProvider>
  );
}
