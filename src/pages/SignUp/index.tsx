import React from "react";
import { FiLogIn, FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import LogoImg from '../../assets/Logo.png';

import Input from "../../components/Input";
import Button from "../../components/Button";
 
const SignUp: React.FC = () => (
    <Container>
        <Background />

        <Content>
            <img src={LogoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu cadastro</h1>
                <Input name="name" placeholder="Nome" />
                <Input name="email" placeholder="E-mail" />
                <Input name="password" placeholder="Senha" type="password"  />
                <Button type="submit">Cadastrar</Button>
            </form>

            <a href="login">
                {FiArrowLeft({})}
                Voltar para Login
            </a>
        </Content>
    </Container>
)

export default SignUp;