import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import LogoImg from '../../assets/Logo.png';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={LogoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu Login</h1>
                <input placeholder="E-mail" />
                <input placeholder="Senha" type="password" />
                <button type="submit">Entrar</button>
                <a>Esqueci minha senha</a>
            </form>

            <a href="">
                {FiLogIn({})}
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
)

export default SignIn;