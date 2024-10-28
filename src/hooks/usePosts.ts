import { useContext } from "react"
import { PostContext } from "../context/PostContext"

export const usePosts = () => {
    const context = useContext(PostContext);

    if (context === undefined) {
        throw new Error('usePosts must be used within a PostProvider')
    }

    return context;
}