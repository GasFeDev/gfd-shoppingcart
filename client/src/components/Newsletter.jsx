import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #cfc2c5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  font-weight: 800;
  ${mobile({
    fontSize: "40px",
    marginLeft: "20px",
    marginBottom: "200px",
    alignItems: "center",
    position: "absolute",
    textAlign: "center",
  })}
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 30px;
  ${mobile({ textAlign: "center", marginBottom: "20px" })}
`;

const InputContainer = styled.div`
  width: 60%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%", marginBottom: "-90px" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 30px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Boletin informativo</Title>
      <Desc>Obtenga actualizaciones oportunas de sus productos favoritos.</Desc>
      <InputContainer>
        <Input placeholder="Tu correo electrónico" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
