import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

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
      <Image
        source={require('@/assets/images/owlab-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Owlab</Text>
      <Text style={styles.subtitle}>Treine sua mente</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/exercise')}
        activeOpacity={0.8}
        accessibilityLabel="Botão para iniciar o treino cognitivo"
      >
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
    width: 160,
    height: 160,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Raleway-BoldItalic',
    fontSize: 32,
    color: '#72e5ff',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6c63ff',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: 'Raleway-Regular',
    color: '#fff',
    fontSize: 16,
  },
});