"use client";
import AxiosConfig from "@/configurations/axios.config";
import Quiz from "@/models/Quiz";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";

export default function useAzureaQuiz() {
  const [values] = useAxios<Quiz[], string, any>(
    AxiosConfig({
      url: "data/quizzes.json",
    })
  );
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [typesFilter, setTypesFilter] = useState<string[]>([]);
  const [questionFilter, setQuestionFilter] = useState<string>("");
  const [answerFilter, setAnswerFilter] = useState<string>("");

  useEffect(() => {
    if (values.data) {
      setQuizzes(values.data);

      const ts: string[] = [];
      values.data.forEach((d) => {
        d.types.forEach((x) => {
          if (!ts.find((t) => t === x)) {
            ts.push(x);
          }
        });
      });
      setTypes(ts);
    }
  }, [values]);

  const filteredQuizzes = quizzes.filter((quiz) => {
    if (typesFilter.length <= 0 && !questionFilter && !answerFilter) {
      return true;
    }

    if (questionFilter && !quiz.question.match(`.*${questionFilter}.*`)) {
      return false;
    }

    if (answerFilter && !quiz.answer.match(`.*${answerFilter}.*`)) {
      return false;
    }

    if (typesFilter.length > 0) {
      for (let i = 0; i < typesFilter.length; i++) {
        const typeFilter = typesFilter[i];
        if (quiz.types.find((x) => x === typeFilter)) {
          return true;
        }
      }
      return false;
    }

    return true;
  });

  return {
    quizzes,
    filteredQuizzes,
    types,
    typesFilter,
    questionFilter,
    answerFilter,
    setTypesFilter,
    setQuestionFilter,
    setAnswerFilter,
  };
}
