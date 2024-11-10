import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [result, setResult] = useState<string>([]);
  const [count, setCount] = useState<number>(0);
  const [ans, setAns] = useState<string>("");

  const navigate = useNavigate();

  const naxthandler = () => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  };
  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          padding: "1rem",
        }}
      >
        <Typography m={"2rem 0"}>Quiz</Typography>
        <Typography variant="h3">
          {count + 1} - {"Randoms"}
        </Typography>

        <FormControl>
          <FormLabel
            sx={{
              mt: "2rem",
              mb: "1rem",
            }}
          >
            Meaning
          </FormLabel>
          <RadioGroup
            value={ans}
            onChange={(e) => setAns(e.currentTarget.value)}
          >
            <FormControlLabel
              value={"Lol"}
              control={<Radio />}
              label={"Option 1"}
            />
          </RadioGroup>
        </FormControl>

        <Button
          sx={{
            margin: "3rem 0",
          }}
          variant="contained"
          fullWidth
          onClick={naxthandler}
          disabled={ans === ""}
        >
          {count === 7 ? "Submit" : "Next"}
        </Button>
      </Container>
    </div>
  );
};

export default Quiz;

// 5:58 end
