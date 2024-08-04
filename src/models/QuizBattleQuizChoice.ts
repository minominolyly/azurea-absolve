export default interface QuizBattleQuizChoice {
  text: string;
  imageFilename?: string | undefined;
  isCorrectAnswer: boolean;
  note?: string | undefined;
}
