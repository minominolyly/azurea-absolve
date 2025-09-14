"use client";
import useAzureaQuiz from "@/hooks/useAzureaQuiz";
import AppConfig from "@/configurations/app.config";
import { ExpandMore, Clear } from "@mui/icons-material";
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Chip,
  MenuItem,
  TextField,
  IconButton,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import Image from "next/image";
import { Column, Columns } from "react-minolith";

export default function AzureaQuizViewer() {
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
  } = useAzureaQuiz();

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
        <Columns gutter={"1rem"}>
          {filteredQuizzes.map((quiz, index) => {
            return (
              <Column
                key={index}
                sizeXSmall={12}
                sizeSmallOrLess={6}
                sizeMediumOrMore={4}
              >
                <Card>
                  <CardContent sx={{ bgcolor: blue[100] }}>
                    <Columns>
                      <Column size={2} sizeXSmall={12}>
                        <Avatar sx={{ bgcolor: blue[500] }}>{"Q"}</Avatar>
                      </Column>
                      <Column size={10} sizeXSmall={12}>
                        <Typography sx={{ verticalAlign: "middle" }}>
                          {quiz.question}
                        </Typography>
                        {quiz.questionImageFilename ? (
                          <div>
                            <Image
                              src={`${AppConfig.BASE_URL}/images/quiz/azurea-quiz/${quiz.questionImageFilename}`}
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
                      </Column>
                    </Columns>
                  </CardContent>
                  <CardContent sx={{ bgcolor: red[100] }}>
                    <Columns>
                      <Column size={2} sizeSmallOrLess={12}>
                        <Avatar sx={{ bgcolor: red[500] }}>{"A"}</Avatar>
                      </Column>
                      <Column size={10} sizeSmallOrLess={12}>
                        <Typography sx={{ verticalAlign: "middle" }}>
                          {quiz.answer}
                        </Typography>
                        {quiz.answerImageFilename ? (
                          <div>
                            <Image
                              src={`${AppConfig.BASE_URL}/images/quiz/azurea-quiz/${quiz.answerImageFilename}`}
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
                      </Column>
                    </Columns>
                  </CardContent>
                  <CardContent>
                    <Columns>
                      <Column size={12}>
                        {quiz.types.map((t) => (
                          <Chip key={t} label={t} />
                        ))}
                      </Column>
                    </Columns>
                  </CardContent>
                </Card>
              </Column>
            );
          })}
        </Columns>
      </section>
    </Box>
  );
}
