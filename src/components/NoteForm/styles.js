import styled from "styled-components";

export const Form = styled.View`
  margin-top: 28px;
  gap: 24px;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: white;
    font-family: 'Montserrat-400';
    margin: 4px;

`;

export const Input = styled.TextInput`
  background: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 12px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${(props) => props.disabled ? '#999' : '#4BB543'};
    border-radius: 12px;
    width: 240px;
    height: 36px;
    margin: 12px;
    display: flex;
    align-items: center;
    justify-self: center;
    align-self: center;
`