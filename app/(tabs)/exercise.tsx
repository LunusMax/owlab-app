import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { questions } from '../data/questions';

export default function ExerciseScreen() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const question = questions[current];

  const handleAnswer = (choice: number) => {
    const isCorrect = choice === question.correct;

    Alert.alert(
      isCorrect ? 'Correto ✅' : 'Errado ❌',
      isCorrect ? 'Boa! Vamos para a próxima.' : 'Tente prestar mais atenção.',
      [{ text: 'Continuar', onPress: goNext }]
    );

    if (isCorrect) setScore((prev) => prev + 1);
  };

  const goNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      router.replace({ pathname: '/result', params: { score } });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.prompt}</Text>
      {question.options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.option}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.score}>Pontuação: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a182a',
    padding: 24,
    justifyContent: 'center',
  },
  question: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  option: {
    backgroundColor: '#6c63ff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 16,
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  score: {
    marginTop: 40,
    color: '#aaa',
    textAlign: 'center',
    fontSize: 16,
  },
});