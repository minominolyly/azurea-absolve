"use client";
import AppConfig from "@/configurations/app.config";
import useQuizBattleQuiz from "@/hooks/useQuizBattleQuiz";
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
  Typography,
} from "@mui/material";
import QuizBattleQuizCard from "./QuizBattleQuizCard/QuizBattleQuizCard";

export default function QuizViewer(props: QuizViewerProps) {
  const {
    quizzes,
    filteredQuizzes,
    types,
    typesFilter,
    questionFilter,
    answerFilter,
    setTypesFilter,
    setQuestionFilter,
    setAnswerFilter,
  } = useQuizBattleQuiz();

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
              <Grid key={index} item xs={12} sm={6} md={6}>
                <QuizBattleQuizCard key={index} quiz={quiz} />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </Box>
  );
}

export interface QuizViewerProps {
  // quizzes: QuizBattleQuiz[];
  // filteredQuizzes: QuizBattleQuiz[];
  // types: string[];
  // typesFilter: string[];
  // questionFilter: string;
  // answerFilter: string;
  // setTypesFilter: (typesFilter: string[]) => void;
  // setQuestionFilter: (questionFilter: string) => void;
  // setAnswerFilter: (answerFilter: string) => void;
}
