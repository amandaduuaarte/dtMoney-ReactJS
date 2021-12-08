import { useState } from "react";
import { Dashboard } from "./components/Dashboard/index";
import { Header } from "./components/Header/index";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";


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
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard/>
     <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handlecloseNewTransactionModal}>
          <h2> Cadastra transação</h2>
        </Modal>
     <GlobalStyle/>
    </>
  );
}

