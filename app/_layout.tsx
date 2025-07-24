import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Thin': require('../assets/fonts/Raleway-Thin.ttf'),
    'Raleway-Italic': require('../assets/fonts/Raleway-Italic.ttf'),
    'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
    'Raleway-BoldItalic': require('../assets/fonts/Raleway-BoldItalic.ttf'),
    // Adicione os outros conforme necessário
  });

  if (!fontsLoaded) {
    return <View />; // Ou qualquer splash/loading
  }

  return <Slot />;
}
