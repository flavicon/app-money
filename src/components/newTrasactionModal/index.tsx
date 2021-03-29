import Modal from 'react-modal';
import { Container } from './styles';

interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal({isOpen, onRequestClose}: NewTrasactionModalProps) {

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Transação</h2>
                <form action="">
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Preço"/>
                    <button>Entrada</button>
                    <button>Saida</button>
                    <input type="text" placeholder="Categoria"/>
                </form>
            </Container>
        </Modal>
    )

}