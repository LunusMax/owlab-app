// app/components/ProgressBar.tsx
import { StyleSheet, View } from 'react-native';

type Props = {
  progress: number; // valor entre 0 e 1
};

export default function ProgressBar({ progress }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 12,
    backgroundColor: '#333',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 24,
  },
  fill: {
    height: '100%',
    backgroundColor: '#6c63ff',
  },
});
