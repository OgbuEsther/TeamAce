import React from "react";
import styled from "styled-components";
import Staffhead from "../StaffDashboard/Staffhead";
import Staffsidebar from "../StaffDashboard/";
import Fees from "../StaffDashboard/Fees";

const Product = () => {
  return (
    <Container>
      <Staffhead />
      <Staffsidebar />
      <br />
      <br />
      <br />
      <Fees />
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* margin-left: 260px; */
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
