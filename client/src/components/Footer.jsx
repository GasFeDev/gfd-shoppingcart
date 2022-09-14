import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 60%;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FedeApp</Logo>
        <Desc>
          Página de simulación de carrito de compra del rubro indumentaria.
          Muchos de los items que aparecen en las diferentes paginas de la App
          son utilizados para el dieño en si de la página, sin cumplir ningun
          tipo de funcionalidad.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces útiles</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrito de compra</ListItem>
          <ListItem>Moda hombre</ListItem>
          <ListItem>Moda mujer</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>My cuenta</ListItem>
          <ListItem>Rastreo de orden</ListItem>
          <ListItem>Lista de deseos</ListItem>
          <ListItem>Términos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Malargüe, Mendoza, Argentina
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +260422xxxx
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> gasfedev@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
