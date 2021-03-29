import logoImg from '../../assets/logo.svg';
import { Container, Content } from "./style";

interface HeaderProps {
    isHandleOpenModal: () => void;
}

export function Header({ isHandleOpenModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button onClick={isHandleOpenModal}>Nova transação</button>
            </Content>
        </Container>
    )
}