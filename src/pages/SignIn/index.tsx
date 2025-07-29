import React from "react";
import { FiLogIn, FiLock, FiMail } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import LogoImg from '../../assets/Logo.png';

import Input from "../../components/Input";
import Button from "../../components/Button";
 
const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={LogoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu Login</h1>
                <Input name="email" placeholder="E-mail" />
                <Input name="password" placeholder="Senha" type="password"  />
                <Button type="submit">Entrar</Button>
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