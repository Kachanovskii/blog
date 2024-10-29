import { createContext, useEffect, useState } from "react";
import { Post } from "../types/types";
import { fetchPosts } from "../services/api";

interface PostContextType {
    posts: Post[];
    loading: boolean;
    error: string | null;
    page: number;
    setPage: (page: number) => void;
}

export const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchPosts(page, 10);
                setPosts(data)
            } catch (error) {
                setError('Failed to fetch posts')
            } finally {
                setLoading(false)
            }
        }

        loadPosts();
    }, [page])

    return (
        <PostContext.Provider value={{posts, loading, error, page, setPage}}>
            {children}
        </PostContext.Provider>
    )
}