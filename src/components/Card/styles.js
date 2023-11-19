import styled from "styled-components";


export const Container = styled.TouchableOpacity`
  background: #d9d9d9;
  border-radius: 8px;
  font-size: 16px;
  padding:0px;
  font-family: 'Montserrat-500';
  margin-top: 8px;
`;



export const Card = styled.TouchableOpacity`
  padding: 8px 60px 8px 60px;
  font-size: 16px;
  font-family: 'Montserrat-500';
`;


export const Circle = styled.View`
  background-color:#ff0000;
  width:40px;
  height:40px;
  border-radius:100px;
  top:15px;
  left:5px;
  position:absolute;
`;

export const Title = styled.Text`
  font-size: 25px;
  overflow: hidden;
  font-family: 'Montserrat-500';
`;

export const Time = styled.Text`
  font-size: 13px;
  color:#a5a5a5;
  font-family: 'Montserrat-500';
`;