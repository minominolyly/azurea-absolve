import QuizBattleQuizChoice from "./QuizBattleQuizChoice";

export default interface QuizBattleQuiz {
  types: string[];
  text: string;
  imageFilename?: string | undefined;
  choices: QuizBattleQuizChoice[];
  note?: string | undefined;
}
