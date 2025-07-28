import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FeedbackOverlay } from '../../components/FeedbackOverlay';
import { questions } from '../data/questions';

export default function ExerciseScreen() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = questions[current];
  const progress = (current + 1) / questions.length;

  const handleAnswer = (choiceIndex: number) => {
    const correct = choiceIndex === question.correct;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      goNext();
    }, 1000);
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
      {/* Barra de progresso */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.question}>{question.prompt}</Text>

      {/* Mapeando as opções e passando o índice para handleAnswer */}
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index.toString()} // É mais seguro usar o índice como chave aqui
          style={styles.option}
          onPress={() => handleAnswer(index)} // Passando o índice da opção
          disabled={showFeedback}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.score}>Pontuação: {score}</Text>

      {showFeedback && <FeedbackOverlay correct={isCorrect} />}
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
  progressBarBackground: {
    height: 10,
    backgroundColor: '#3a3a50',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 24,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#6c63ff',
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