import axios from "axios";
import { Post } from "../types/types";

export const fetchPosts = async (
  page: number,
  limit: number = 10
): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );

  return response.data;
};

export const fetchAllPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return response.data;
};
