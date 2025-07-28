export type Question = {
  prompt: string;
  options: number[];
  correct: number;
};

export const questions: Question[] = [
  {
    prompt: 'Qual número vem a seguir? 2, 4, 6, ?',
    options: [7, 8, 9, 10],
    correct: 1,
  },
  {
    prompt: 'Complete a sequência: 1, 1, 2, 3, 5, ?',
    options: [8, 7, 9, 6],
    correct: 0,
  },
  {
    prompt: 'Qual número completa a sequência: 5, 10, 20, ?',
    options: [30, 35, 40, 25],
    correct: 2,
  },
  {
    prompt: 'Quantos lados tem um octógono?',
    options: [6, 7, 8, 9],
    correct: 2,
  },
  {
    prompt: 'Qual é o menor número primo maior que 10?',
    options: [11, 13, 15, 17],
    correct: 0,
  },
  {
    prompt: 'Quanto é 7 x 8?',
    options: [56, 64, 54, 58],
    correct: 0,
  },
  {
    prompt: 'Qual número falta? 81, 64, 49, ?, 25',
    options: [36, 30, 40, 32],
    correct: 0,
  },
  {
    prompt: 'Se 2^3 = 8, quanto é 3^3?',
    options: [9, 27, 18, 24],
    correct: 1,
  },
  {
    prompt: 'Qual a raiz quadrada de 144?',
    options: [11, 12, 13, 14],
    correct: 1,
  },
  {
    prompt: 'Complete: 100, 90, 80, ?',
    options: [60, 70, 75, 85],
    correct: 1,
  },
];