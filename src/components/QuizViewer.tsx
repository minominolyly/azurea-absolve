"use client";
import AppConfig from "@/configurations/app.config";
import useQuiz from "@/hooks/useQuiz";
import { Clear, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import Image from "next/image";

export default function QuizViewer() {
  const {
    filteredQuizzes,
    types,
    typesFilter,
    questionFilter,
    answerFilter,
    setTypesFilter,
    setQuestionFilter,
    setAnswerFilter,
  } = useQuiz();

  return (
    <Box>
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
          {filteredQuizzes.map((quiz, index) => {
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
                        {quiz.questionImageFilename ? (
                          <div>
                            <Image
                              src={`${AppConfig.BASE_URL}/images/quiz/${quiz.questionImageFilename}`}
                              alt={quiz.question}
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
                  <CardContent sx={{ bgcolor: red[100] }}>
                    <Grid container>
                      <Grid item xs={2}>
                        <Avatar sx={{ bgcolor: red[500] }}>{"A"}</Avatar>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography sx={{ verticalAlign: "middle" }}>
                          {quiz.answer}
                        </Typography>
                        {quiz.answerImageFilename ? (
                          <div>
                            <Image
                              src={`${AppConfig.BASE_URL}/images/quiz/${quiz.answerImageFilename}`}
                              alt={quiz.answer}
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
    </Box>
  );
}
