import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { usePosts } from "../hooks/usePosts";
import Loader from "../components/Loader";
import BasicPagination from "../components/BasicPagination";

function HomePage() {
  const {posts, loading, error, page, setPage} = usePosts();

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    console.log(true)
    setPage(value);
  }

  if (loading) {
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px'}}>
      <Loader />
    </div>
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

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
        <BasicPagination page={page} count={10} onChange={handlePageChange} />
      </div>
    </div>
  );
}

export default HomePage;
