import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { Post } from "../types/types";

function HomePage() {
  const posts: Post[] = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ];

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
