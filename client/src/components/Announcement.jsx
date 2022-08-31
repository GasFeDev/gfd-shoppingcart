import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
`;

const Announcement = () => {
  return (
    <Container>
      ¡Gran oferta! Envíos gratis en pedidos superiores a $ 2500, aprovechalo!!
    </Container>
  );
};

export default Announcement;
