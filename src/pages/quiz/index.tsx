import AxiosConfig from "@/configurations/axios.config";
import CommonLayout from "@/layouts/CommonLayout";
import Quiz from "@/models/Quiz";
import { Clear, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import useAxios from "axios-hooks";
import { useState } from "react";

export default function QuizPage() {
  const [values, refetch] = useAxios<any, string, any>(
    AxiosConfig({
      url: "data/quizzes.json",
    })
  );
  const [questionFilter, setQuestionFilter] = useState<string>("");
  const [answerFilter, setAnswerFilter] = useState<string>("");

  const data: Quiz[] = values.data ? values.data : [];

  const filtered = data.filter((quiz) => {
    if (!questionFilter && !answerFilter) {
      return true;
    }
    if (questionFilter && !quiz.question.match(`.*${questionFilter}.*`)) {
      return false;
    }
    if (answerFilter && !quiz.answer.match(`.*${answerFilter}.*`)) {
      return false;
    }
    return true;
  });

  return (
    <CommonLayout title="クイズ / Absolve@海神の眼.AZUREA-空の唄-">
      <Container>
        <section>
          <h1>{"クイズ"}</h1>
        </section>
        <section>
          <Accordion
            style={{
              margin: "1rem auto",
            }}
            defaultExpanded={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{"フィルター"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl sx={{ display: "block", margin: "1rem" }}>
                <TextField
                  label="問題"
                  variant="outlined"
                  fullWidth={true}
                  value={questionFilter}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => {
                          setQuestionFilter("");
                        }}
                      >
                        <Clear />
                      </IconButton>
                    ),
                  }}
                  onChange={(event) => {
                    setQuestionFilter(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl sx={{ display: "block", margin: "1rem" }}>
                <TextField
                  label="解答"
                  variant="outlined"
                  fullWidth={true}
                  value={answerFilter}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => {
                          setAnswerFilter("");
                        }}
                      >
                        <Clear />
                      </IconButton>
                    ),
                  }}
                  onChange={(event) => {
                    setAnswerFilter(event.target.value);
                  }}
                />
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </section>
        <section>
          <Grid container spacing={2}>
            {filtered.map((quiz, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card>
                    <Box sx={{ bgcolor: blue[100] }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: blue[500] }}>{"Q"}</Avatar>
                        }
                        title="Question"
                      />
                      <CardContent>
                        <Typography>{quiz.question}</Typography>
                      </CardContent>
                    </Box>
                    <Box sx={{ bgcolor: red[100] }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }}>{"A"}</Avatar>
                        }
                        title="Answer"
                      />
                      <CardContent>
                        <Typography>{quiz.answer}</Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </section>
      </Container>
    </CommonLayout>
  );
}
