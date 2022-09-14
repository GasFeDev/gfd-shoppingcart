import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { mobile } from "../responsive";
import { axiosInstance } from "../config";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.vogue.mx/photos/615f70a72dd96a3f1974f3a3/master/w_3000,h_1570,c_limit/Jeans-a-la-cadera-Missoni-msgm-valentino-SS-22.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 10px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleFinish = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axiosInstance.post("auth/register", {
        email,
        username,
        password,
      });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREAR UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Nombre de usuario" ref={usernameRef} required />
          <Input
            placeholder="Correo electrónico"
            required
            ref={emailRef}
            type="email"
          />
          <Input
            placeholder="Contraseña"
            required
            ref={passwordRef}
            type="password"
            minLength="6"
          />
          <Input
            placeholder="Confirmar Contraseña "
            required
            ref={passwordRef}
            type="password"
            minLength="6"
          />
          <Agreement>
            Al crear la cuenta, doy mi consentimiento para el procesamiento de
            mis datos personales, de acuerdo con la
            <b> POLÍTICA DE PRIVACIDAD</b>
          </Agreement>
          <Button onClick={handleFinish}>CREAR</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
