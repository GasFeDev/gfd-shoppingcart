import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 30px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

/* useSelector: Le permite extraer datos del estado de la tienda Redux, utilizando una función de selección.
 El selector se ejecutará cada vez que se represente el componente de la función (a menos que su referencia no haya cambiado desde una representación anterior del componente, de modo que el gancho pueda devolver un resultado almacenado en caché sin volver a ejecutar el selector). useSelector()también se suscribirá a la tienda Redux y ejecutará su selector cada vez que se envíe una acción.*/
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout({}));
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SearchContainer>
            <Input placeholder="Buscar" />
            <Search style={{ color: "gray", fontSize: 17 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>CarroDeCompra-FedeApp</Logo>
        </Center>
        <Right>
          {currentUser ? (
            <div className="options">
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    {" "}
                    {/* badgecontent: Agrega el número de artículo en el icono */}
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Link>
              <MenuItem onClick={handleClick}>Cerrar Sesión</MenuItem>
            </div>
          ) : (
            <div className="navItems">
              <MenuItem>
                <Link to="/login">INICIAR SESIÓN</Link>
              </MenuItem>

              <Link to="/register">
                <MenuItem>REGISTRARSE</MenuItem>
              </Link>
            </div>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
