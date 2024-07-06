import styled from "styled-components";

export const ThehouseContainer = styled.div`
  padding: 50px 0 50px 0;
  width: 100vw;
  background-color: white;
  background-color: #eaf2ff;
  @media screen and (max-width: 600px) {
    padding: 20px 0 50px 0;
  }
`;

export const ThehouseContent = styled.div`
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: 6% 45% 14% 35%;
  @media screen and (max-width: 1250px) {
    width: 1000px;
    grid-template-columns: 6% 46% 5% 43%;
    padding: 0 10px 0 10px;
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: 6% 49% 5% 40%;
    width: 900px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    width: 850px;
    margin-top: 30px;
  }
  @media screen and (max-width: 850px) {
    width: 750px;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const TheHouseSymbol = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const TheHouseMainImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    margin-top: 90px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 750px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    margin-top: 90px;
  }
`

export const ThehouseSpace = styled.div`
  /* @media screen and (max-width: 1050px) {
    display: none;
  } */
`

export const ThehouseTextTitle = styled.div`
  font-size: 35px;
  font-weight: 900;
  color: black;
  margin-bottom: 20px;
  line-height: 50px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  @media screen and (max-width: 440px) {
    font-size: 40px;
  }
  @media screen and (max-width: 350px) {
    font-size: 30px;
  }
`;

export const ThehouseTextContent = styled.div`
  color: black;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  @media screen and (max-width: 1250px) {
    line-height: 20px;
    font-size: 14.5px;
  }
  @media screen and (max-width: 1000px) {
    order: 2;
    width: 540px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;

export const ThehouseTextPara1 = styled.div`
  /* margin-top: 20px; */
`;

export const TheHouseHeader = styled.div`
  display: none;
  img {
    transform: rotate(90deg);
    margin: -180px 0 -220px 0;
  }
  @media screen and (max-width: 1000px) {
    display: block !important;
  }
  @media screen and (max-width: 600px) {
    img {
      margin: -180px 0 -220px 50px;
    }
  }
`
export const TheHouseHeaderTitle = styled.div`
  font-size: 40px;
  color: black;
  font-weight: 900;
  /* text-align: center; */
  @media screen and (max-width: 1000px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
  @media screen and (max-width: 550px) {
    font-size: 25px;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
`
export const ThehouseTextPara2 = styled.div`
  margin-top: 20px;
`;
export const ThehouseTextPara3 = styled.div`
  margin-top: 20px;
`;
export const ThehouseTextPara4 = styled.div`
  margin-top: 20px;
`;
