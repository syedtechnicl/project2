import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Leaarning = () => {
  const [count, setcount] = useState<number>(0);
  const params = useSearchParams()[0].get("laungage") as LangType;
  const navigate = useNavigate();

  const naxtHandler = (): void => {
    setcount((prev) => prev + 1);
  };

  return (
    <div>
      <Container
        maxWidth={"sm"}
        sx={{
          padding: "1rem",
        }}
      >
        <Button
          onClick={
            count === 0
              ? () => navigate("/Home")
              : () => setcount((prev) => prev - 1)
          }
        >
          <ArrowBack />
        </Button>
        <Typography m={"2rem 0"}>Laungage Made Easy</Typography>
        <Stack direction={"row"} spacing={"1rem"}>
          <Typography variant="h4">
            {count + 1} - {"Sample"}
          </Typography>
          <Typography color="blue" variant="h4">
            {" "}
            : {"LoL"}
          </Typography>

          <Button
            sx={{
              borderRadius: "50%",
            }}
          >
            <VolumeUp />
          </Button>
        </Stack>

        <Button
          sx={{
            margin: "3rem 0",
          }}
          variant="contained"
          fullWidth
          onClick={count === 7 ? () => navigate("/Quiz") : naxtHandler}
        >
          {count === 7 ? "Text" : "Next"}
        </Button>
      </Container>
    </div>
  );
};

export default Leaarning;

// 5: 45
