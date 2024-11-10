import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  color: "%fff",
  margin: "0.5rem",
  textDecoderation: "none",
};

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" mr={"auto"} textTransform={"uppercase"}>
            LearnDo.
          </Typography>
          <Link style={styles} to={"/Home"}>
            Home
          </Link>
          <Link style={styles} to={"/Login"}>
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
