import AppConfig from "@/configurations/app.config";
import {
  Card,
  CardContent,
  Grid,
  Avatar,
  Typography,
  Chip,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import QuizBattleQuizCardProps from "./QuizBattleQuizCardProps";
import Image from "next/image";
import { useState } from "react";

export default function QuizBattleQuizCard(props: QuizBattleQuizCardProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <Card>
      <CardContent sx={{ bgcolor: "var(--minolith-color-blue-95)" }}>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ bgcolor: "var(--minolith-color-blue-60)" }}>{"Q"}</Avatar>
          </Grid>
          <Grid item xs={10}>
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
          </Grid>
        </Grid>
      </CardContent>
      <CardContent sx={{ bgcolor: "var(--minolith-color-red-95)" }}>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ bgcolor: "var(--minolith-color-red-60)" }}>{"A"}</Avatar>
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              spacing={1}
              sx={{ paddingTop: 0.5, paddingBottom: 0.5 }}
            >
              {props.quiz.choices.map((choice, index) => {
                return (
                  <Grid item xs={12} sm={6} key={index}>
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
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              container
              spacing={1}
              sx={{ paddingTop: 0.5, paddingBottom: 0.5 }}
            >
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            {props.quiz.types.map((t) => (
              <Chip key={t} label={t} />
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
