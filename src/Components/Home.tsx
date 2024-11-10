import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const laungages = [
  {
    name: "Japaneses",
    code: "Ja",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "French",
    code: "fr",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const laungageSelectHandler = (laungage: string): void => {
    navigate(`/Learning?laungage=${laungage}`);
  };

  return (
    <div>
      <Container maxWidth={"sm"}>
        <Typography variant="h1" p={"2rem"} textAlign={"center"}></Typography>
        Welcome, Begin Your Journey Of Learning.
      </Container>

      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {laungages.map((i) => {
          return (
            <Button
              onClick={() => {
                laungageSelectHandler(i.code);
              }}
              key={i.code}
              variant="contained"
            >
              {i.name}
            </Button>
          );
        })}
      </Stack>
      <Typography textAlign={"center"}>
        Choose One Laungage From Above
      </Typography>
    </div>
  );
};

export default Home;

// 5:43 end
