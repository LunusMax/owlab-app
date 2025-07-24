export type Question = {
  prompt: string;
  options: number[];
  correct: number;
};

export const questions: Question[] = [
  {
    prompt: 'Qual número vem a seguir? 2, 4, 6, ?',
    options: [7, 8, 9, 10],
    correct: 8,
  },
  {
    prompt: 'Complete a sequência: 1, 1, 2, 3, 5, ?',
    options: [8, 7, 9, 6],
    correct: 8,
  },
];