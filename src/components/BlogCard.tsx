import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Post } from "../types/types";

interface BlogCardProps {
  post: Post
}

function BlogCard({post}: BlogCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/post/${post.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
