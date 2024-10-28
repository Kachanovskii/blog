import { createContext, useEffect, useState } from "react";
import { Post } from "../types/types";
import { fetchPosts } from "../services/api";

interface PostContextType {
    posts: Post[];
    loading: boolean;
    error: string | null
}

export const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data)
            } catch (error) {
                setError('Failed to fetch posts')
            } finally {
                setLoading(false)
            }
        }

        loadPosts();
    }, [])

    return (
        <PostContext.Provider value={{posts, loading, error}}>
            {children}
        </PostContext.Provider>
    )
}