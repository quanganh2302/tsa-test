const mathQuestions = [
  {
    id: 1,
    question: "Solve the equation: 2x + 5 = 15",
    options: {
      a: "x = 5",
      b: "x = 7",
      c: "x = 8",
      d: "x = 10"
    },
    correctAnswer: "a"
  },
  {
    id: 2,
    question: "Find the derivative of f(x) = 3x^2 + 2x + 1",
    options: {
      a: "f'(x) = 6x + 2",
      b: "f'(x) = 6x + 1",
      c: "f'(x) = 3x^2 + 2x",
      d: "f'(x) = 6x"
    },
    correctAnswer: "a"
  },
  {
    id: 3,
    question: "Evaluate the integral: ∫ (4x^3 + 2x^2 - 5) dx",
    options: {
      a: "(x^4 + (2/3)x^3 - 5x) + C",
      b: "(x^4 + (2/3)x^3 - 5x^2) + C",
      c: "(x^4 + (2/3)x^2 - 5x) + C",
      d: "(x^4 + (1/3)x^3 - 5x) + C"
    },
    correctAnswer: "a"
  },
  {
    id: 4,
    question: "What is the solution to the system of equations:\n2x - y = 4\nx + y = 3",
    options: {
      a: "x = 2, y = 1",
      b: "x = 1, y = 2",
      c: "x = 3, y = -1",
      d: "x = -1, y = 3"
    },
    correctAnswer: "b"
  },
  {
    id: 5,
    question: "Simplify the expression: (3x^2 + 4x - 2) / (x - 1)",
    options: {
      a: "3x + 7 + 5/(x - 1)",
      b: "3x + 7 - 5/(x - 1)",
      c: "3x - 5 + 7/(x - 1)",
      d: "3x - 5 - 7/(x - 1)"
    },
    correctAnswer: "b"
  },
  {
    id: 6,
    question: "Find the solution to the inequality: 2x - 7 < 5",
    options: {
      a: "x < 6",
      b: "x > 6",
      c: "x < 1",
      d: "x > 1"
    },
    correctAnswer: "a"
  },
  {
    id: 7,
    question: "Calculate the determinant of the matrix:\n| 3  1 |\n| 2 -2 |",
    options: {
      a: "-8",
      b: "8",
      c: "10",
      d: "-10"
    },
    correctAnswer: "a"
  },
  {
    id: 8,
    question: "Solve the trigonometric equation: sin(x) = 0.5",
    options: {
      a: "x = π/6",
      b: "x = π/4",
      c: "x = π/3",
      d: "x = π/2"
    },
    correctAnswer: "c"
  },
  {
    id: 9,
    question: "What is the value of lim(x → 0) (sin(x)/x)?",
    options: {
      a: "0",
      b: "1",
      c: "π",
      d: "∞"
    },
    correctAnswer: "b"
  },
  {
    id: 10,
    question: "If f(x) = x^2 + 3x + 2, find the vertex of the parabola.",
    options: {
      a: "(-1, 0)",
      b: "(-3/2, -1/4)",
      c: "(-3/2, -5/4)",
      d: "(-1, -1)"
    },
    correctAnswer: "c"
  }
];

// Exporting the questions
module.exports = mathQuestions;
