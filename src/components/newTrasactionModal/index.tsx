import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal(
    {isOpen, onRequestClose}: NewTrasactionModalProps
) {

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {

        event.preventDefault();


        const data = ({
            type,
            title,
            value,
            category
        });

        api.post('/transactions', data);
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input
                    type="text"
                    placeholder="Nome"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Preço"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />


                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button
                    type="submit"
                >
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )

}
