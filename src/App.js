import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography backgroundColor="" color="">
          Hello japan s
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
