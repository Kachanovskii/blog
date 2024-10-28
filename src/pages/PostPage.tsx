import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

function PostPage() {
  const { id } = useParams<{ id: string }>();
  const { posts } = useContext(PostContext);
  const post = posts.find((post) => post.id === Number(id));

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}

export default PostPage;
