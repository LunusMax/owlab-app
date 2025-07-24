import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Raleway-Regular': require('@/assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('@/assets/fonts/Raleway-Bold.ttf'),
    'Raleway-BoldItalic': require('@/assets/fonts/Raleway-BoldItalic.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6c63ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/owlab-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Owlab</Text>
      <Text style={styles.subtitle}>Treine sua mente</Text>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Coruja diz", "Exploração começa aqui!")}>
        <Text style={styles.buttonText}>Explorar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a182a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Raleway-BoldItalic',
    fontSize: 28,
    color: '#72e5ff',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#fff',
    marginBottom: 26,
  },  
  button: {
    backgroundColor: '#6c63ff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Raleway-Regular',
    color: '#fff',
    fontSize: 16,
  },
});
