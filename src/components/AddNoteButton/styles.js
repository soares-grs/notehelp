import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 10px 30px 0;
`;

export const PlusIcon = styled.Text`
    font-size: 38px;
    color: #d9d9d9;
    font-family: 'Montserrat-400';
`;

export const Circle = styled.View`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #252525;
    border-radius: 100px;
    width: 52px;
    height:52px;
`;