import { createContext, useEffect, useState } from "react";
import { Post } from "../types/types";
import { fetchAllPosts, fetchPosts } from "../services/api";

interface PostContextType {
  posts: Post[];
  allPosts: Post[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: (page: number) => void;
  pageCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPosts(page, 10);
        setPosts(data);
      } catch (error) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page]);

  useEffect(() => {
    const loadAllPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedAllPosts = await fetchAllPosts();
        setAllPosts(fetchedAllPosts);
      } catch {
        setError("Failed to fetch all posts");
      } finally {
        setLoading(false);
      }
    };

    loadAllPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        allPosts,
        loading,
        error,
        page,
        setPage,
        pageCount,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
