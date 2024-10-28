export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface Comment {
    id: number;
    postId: number;
    author: string;
    content: string;
    date: string;
}