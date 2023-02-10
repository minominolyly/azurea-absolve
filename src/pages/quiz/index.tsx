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
  Chip,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { blue, red, teal } from "@mui/material/colors";
import useAxios from "axios-hooks";
import { useState } from "react";

export default function QuizPage() {
  const [values, refetch] = useAxios<any, string, any>(
    AxiosConfig({
      url: "data/quizzes.json",
    })
  );
  const [typesFilter, setTypesFilter] = useState<string[]>([]);
  const [questionFilter, setQuestionFilter] = useState<string>("");
  const [answerFilter, setAnswerFilter] = useState<string>("");

  const data: Quiz[] = values.data ? values.data : [];
  const types: string[] = [];
  data.forEach((d) => {
    d.types.forEach((x) => {
      if (!types.find((t) => t === x)) {
        types.push(x);
      }
    });
  });

  const filtered = data.filter((quiz) => {
    if (typesFilter.length <= 0 && !questionFilter && !answerFilter) {
      return true;
    }
    if (typesFilter.length > 0) {
      for (let i = 0; i < quiz.types.length; i++) {
        const type = quiz.types[i];
        if (!typesFilter.find((x) => x === type)) {
          return false;
        }
      }
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
                <InputLabel>{"タイプ"}</InputLabel>
                <Select
                  label="タイプ"
                  variant="outlined"
                  multiple={true}
                  fullWidth={true}
                  value={typesFilter}
                  input={<OutlinedInput label="Chip" />}
                  onChange={(event) => {
                    if (typeof event.target.value === "object") {
                      const values = event.target.value as string[];
                      setTypesFilter(values);
                    }
                  }}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          onDelete={() => {
                            setTypesFilter(
                              typesFilter.filter((t) => t !== value)
                            );
                          }}
                          onMouseDown={(event) => {
                            event.stopPropagation();
                          }}
                        />
                      ))}
                    </Box>
                  )}
                >
                  {types.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                    <CardContent sx={{ bgcolor: blue[100] }}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Avatar sx={{ bgcolor: blue[500] }}>{"Q"}</Avatar>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography sx={{ verticalAlign: "middle" }}>
                            {quiz.question}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardContent sx={{ bgcolor: red[100] }}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Avatar sx={{ bgcolor: red[500] }}>{"A"}</Avatar>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography sx={{ verticalAlign: "middle" }}>
                            {quiz.answer}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={12}>
                          {quiz.types.map((t) => (
                            <Chip key={t} label={t} />
                          ))}
                        </Grid>
                      </Grid>
                    </CardContent>
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
