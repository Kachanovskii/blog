import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { Post } from "../types/types";
import { usePosts } from "../hooks/usePosts";

function HomePage() {
  const {posts, loading, error} = usePosts();

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <Grid container spacing={2}>
        {posts.map(post => (
          <Grid key={post.id} item xs={4}>
            <BlogCard post={post}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
