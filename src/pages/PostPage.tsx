import { useParams } from "react-router-dom";
import { Post } from "../types/types";

function PostPage() {
  const { id } = useParams<{ id: string }>();
  const posts: Post[] = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ];
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
