import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1
`;


export const NotesContainer = styled.View`
  flex: 1;
`;