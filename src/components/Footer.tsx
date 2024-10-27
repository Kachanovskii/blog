import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 3,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[900],
        color: (theme) => theme.palette.grey[100],
      }}
    >
      <Grid justifyContent="start">
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Blog
          </Typography>
          <Link to="/about" color="#fff" underline="hover">
            About
          </Link>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} Blog. Усі права захищено.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
