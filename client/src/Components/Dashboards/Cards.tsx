import styled from "styled-components";
import { FaSchool } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoQrCode } from "react-icons/io5";

const Cards = () => {
  return (
    <Container>
      <Wrapper>
        <RowOne>
          <Boxes>
            <BoxOneIconHold bg="#023047">
              {" "}
              <FaSchool />{" "}
            </BoxOneIconHold>
            <span>
              Company Name: <strong> Esther & Sons LTD </strong>{" "}
            </span>
          </Boxes>
          <Boxes>
            <BoxOneIconHold bg="#89087E">
              {" "}
              <MdAdminPanelSettings />{" "}
            </BoxOneIconHold>
            <span>
              Admin Name: <strong> Ogbu Esther </strong>
            </span>
          </Boxes>
          <Boxes>
            <BoxOneIconHold bg="#1FAE04">
              {" "}
              <IoQrCode />{" "}
            </BoxOneIconHold>
            <span>
              Company's Code: <strong> 283892 </strong>
            </span>
          </Boxes>
        </RowOne>
      </Wrapper>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  /* @media screen and (max-width: 500px) {
        display
    } */
  /* position: fixed; */
`;

const Wrapper = styled.div`
  /* background-color: azure; */
`;

const RowOne = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Boxes = styled.div`
  height: 120px;
  width: 310px;
  background-color: #fff;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  @media (max-width: 770px) {
    width: 90%;
  }
  span {
    font-size: 15px;
  }
`;

const BoxOneIconHold = styled.div<{ bg: string }>`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;
`;