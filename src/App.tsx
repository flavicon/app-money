import { Header } from "./components/header";
import { Dashboard } from './components/dashboard'
import { NewTrasactionModal } from './components/newTrasactionModal';
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';

export function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
      setIsOpenModal(true);
  }

  function handleCloseModal() {
      setIsOpenModal(false);
  }

  return (
    <>
      <Header isHandleOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTrasactionModal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}
