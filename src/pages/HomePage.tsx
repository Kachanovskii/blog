import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";

function HomePage() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <BlogCard />
        </Grid>
        <Grid item xs={4}>
          <BlogCard />
        </Grid>
        <Grid item xs={4}>
          <BlogCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
