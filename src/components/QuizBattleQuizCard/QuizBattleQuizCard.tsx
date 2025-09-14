import AppConfig from "@/configurations/app.config";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Typography
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Column, Columns } from "react-minolith";
import QuizBattleQuizCardProps from "./QuizBattleQuizCardProps";

export default function QuizBattleQuizCard(props: QuizBattleQuizCardProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <Card>
      <CardContent sx={{ bgcolor: "var(--minolith-color-blue-95)" }}>
        <Columns>
          <Column sizeXSmall={2}>
            <Avatar sx={{ bgcolor: "var(--minolith-color-blue-60)" }}>{"Q"}</Avatar>
          </Column>
          <Column sizeXSmall={10}>
            <Typography sx={{ verticalAlign: "middle" }}>
              {props.quiz.text}
            </Typography>
            {props.quiz.imageFilename ? (
              <div>
                <Image
                  src={`${AppConfig.BASE_URL}/images/quiz/quiz-battle-quiz/${props.quiz.imageFilename}`}
                  alt={props.quiz.text}
                  height={640}
                  width={360}
                  style={{
                    height: "auto",
                    width: "100%",
                    border: "0",
                  }}
                />
              </div>
            ) : (
              <></>
            )}
          </Column>
        </Columns>
      </CardContent>
      <CardContent sx={{ bgcolor: "var(--minolith-color-red-95)" }}>
        <Columns>
          <Column sizeXSmall={2}>
            <Avatar sx={{ bgcolor: "var(--minolith-color-red-60)" }}>{"A"}</Avatar>
          </Column>
          <Column sizeXSmall={10}>
            <Columns
              gutter={"1rem"}
              style={{ paddingTop: 0.5, paddingBottom: 0.5 }}
            >
              {props.quiz.choices.map((choice, index) => {
                return (
                  <Column
                    key={index}
                    sizeXSmall={12}
                    sizeSmallOrLess={6}
                    sizeMediumOrMore={4}
                  >
                    <Box
                      sx={{
                        p: 0.5,
                        bgcolor:
                          choice.isCorrectAnswer && showAnswer
                            ? "var(--minolith-color-green-90)"
                            : "var(--minolith-color-red-95)",
                        borderStyle: "solid",
                        borderWidth: "0.1rem",
                        borderColor:
                          choice.isCorrectAnswer && showAnswer
                            ? "var(--minolith-color-green-90)"
                            : "var(--minolith-color-red-80)",
                        boxShadow:
                          choice.isCorrectAnswer && showAnswer
                            ? "0px 0px 8px 0px var(--minolith-color-green-90)"
                            : "",
                      }}
                    >
                      <Typography sx={{ verticalAlign: "middle" }}>
                        {choice.text}
                      </Typography>
                      {choice.imageFilename ? (
                        <div>
                          <Image
                            src={`${AppConfig.BASE_URL}/images/quiz/quiz-battle-quiz/${choice.imageFilename}`}
                            alt={choice.text}
                            height={640}
                            width={360}
                            style={{
                              height: "auto",
                              width: "100%",
                              border: "0",
                            }}
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </Box>
                  </Column>
                );
              })}
            </Columns>
            <Columns
              gutter={"1rem"}
              style={{ paddingTop: 0.5, paddingBottom: 0.5 }}
            >
              <Column sizeXSmall={12}>
                <FormGroup sx={{ bgcolor: "var(--minolith-color-red-90)", p: 0.5 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showAnswer}
                        color="success"
                        size="small"
                        onChange={() => {
                          setShowAnswer(!showAnswer);
                        }}
                      />
                    }
                    label="正解を見る"
                  />
                </FormGroup>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </CardContent>
      <CardContent>
        <Columns>
          <Column sizeXSmall={12}>
            {props.quiz.types.map((t) => (
              <Chip key={t} label={t} />
            ))}
          </Column>
        </Columns>
      </CardContent>
    </Card>
  );
}
