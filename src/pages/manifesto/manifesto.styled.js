import styled from "styled-components";

export const ManifestoContainer = styled.div`
  width: 100vw;
  padding: 50px 0 50px 0;
  background-color: #eaf2ff;
  @media screen and (max-width: 1050px) {
    display: flex;
    justify-content: center;
  }
`;

export const ManifestoMainArea = styled.div`
  display: flex;
  /* margin-top: 25px; */
  justify-content: center;
  @media screen and (max-width: 1050px) {
    justify-content: flex-start;
    width: 800px;
  }
  @media screen and (max-width: 850px) {
    width: 700px;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
  }
`

export const ManifestoContent = styled.div`
  width: 500px;
`;

export const ManifestoContentSpace = styled.div`
  width: 500px;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`

export const ManifestoTextTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: blue;
  margin-bottom: 20px;
  @media screen and (max-width: 370px) {
    font-size: 30px;
  }
`;

export const ManifestoTextContent = styled.div`
  color: blue;
  font-weight: 700;
  /* letter-spacing: 1px; */
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const ManifestoTextPara1 = styled.div`
  margin-top: 20px;
`;
export const ManifestoTextPara2 = styled.div`
  margin-top: 20px;
`;
export const ManifestoTextPara3 = styled.div`
  margin-top: 20px;
`;
export const ManifestoTextPara4 = styled.div`
  margin-top: 20px;
`;
