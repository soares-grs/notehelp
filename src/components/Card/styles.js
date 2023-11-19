import styled from "styled-components";



export const CardContainer = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    padding:43% 0 0 0;
    top: 0;
`;

export const Card = styled.View`
  background: #d9d9d9;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-family: 'Montserrat-500';

`;

export const Circle = styled.View`
  background-color:#ff0000;
  width:40px;
  height:40px;
  border-radius:100px;
  top:13px;
  left:10px;
  position:absolute;
`;

export const Title = styled.Text`
  padding: 0px 0px 0px 50px;
  font-size: 25px;
  font-family: 'Montserrat-500';
`;

export const Time = styled.Text`
  padding: 0px 0px 0px 53px;
  font-size: 13px;
  color:#a5a5a5;
  font-family: 'Montserrat-500';
`;