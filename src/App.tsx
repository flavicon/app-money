import { Header } from "./components/header";
import { Dashboard } from './components/dashboard'
import { TransactionContext } from "./TransactionsContext";
import { NewTrasactionModal } from './components/newTrasactionModal';
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
      setIsOpenModal(true);
  }

  function handleCloseModal() {
      setIsOpenModal(false);
  }

  return (
    <TransactionContext.Provider value={[]}>
      <Header isHandleOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTrasactionModal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </TransactionContext.Provider>
  );
}
