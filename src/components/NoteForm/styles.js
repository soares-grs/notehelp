import styled from "styled-components";

export const Form = styled.View`
  margin-top: 28px;
  gap: 24px;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: white;
    font-family: 'Montserrat-400';
    margin: 6px;

`;

export const Input = styled.TextInput`
  background: #FFFFFF;
  border-radius: 5px;
  font-size:19px;
  padding: 5px 0px 5px 6px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${(props) => props.disabled ? "#999" : "#4BB543"};
    border-radius: 12px;
    width: 200px;
    height: 36px;
    margin: 12px;
    display: flex;
    align-items: center;
    justify-self: center;
    align-self: center;
`