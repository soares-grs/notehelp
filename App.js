import Main from "./src/main";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    'Montserrat-300': Montserrat_300Light,
    'Montserrat-400': Montserrat_400Regular,
    'Montserrat-500': Montserrat_500Medium,
    'Montserrat-700': Montserrat_700Bold,

  });
  if(!fontsLoaded) {

  } else {
      return (
        <Main />
      )
  }
}