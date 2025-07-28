import { StyleSheet, Text, View } from 'react-native';

type Props = {
  correct: boolean;
};

export function FeedbackOverlay({ correct }: Props) {
  return (
    <View style={[styles.overlay, { backgroundColor: correct ? '#28a745cc' : '#dc3545cc' }]}>
      <Text style={styles.text}>{correct ? 'Correto ✅' : 'Errado ❌'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
