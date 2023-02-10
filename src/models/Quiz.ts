export default interface Quiz {
  types: string[];
  question: string;
  questionImageFilename?: string | undefined;
  answer: string;
  answerImageFilename?: string | undefined;
}
