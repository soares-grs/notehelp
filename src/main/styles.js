import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1;
`;

export const WarningEmptyNotes = styled.Text`
  display:flex;
  padding: 10px 140px 10px 0px;
  color: gray;
  font-family: "Montserrat-500";
`;

export const Card = styled.TouchableOpacity`
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Montserrat-500';
`;

export const CardNotes = styled.View`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;

`;
export const CardEmpty = styled.View`
  display:flex;
  justify-content:center;
    border: 1px solid rgba(204, 204, 204, 0.5);
  align-items:center;
  width:100%;
`;


export const NotesContainer = styled.View`
  flex: 1;
`;

export const Sections = styled.View`
  /* display: flex;
  flex-direction: column; */
`;