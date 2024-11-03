import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { usePosts } from "../hooks/usePosts";
import Loader from "../components/Loader";
import BasicPagination from "../components/BasicPagination";
import Search from "../components/Search";
import React, { useEffect, useRef, useState } from "react";

function HomePage() {
  const { posts, allPosts, loading, error, page, setPage, setSearchQuery } =
    usePosts();

  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [inputQuery, setInputQuery] = useState("");

  const postsPerPage = 10;
  const prevQuery = useRef(debouncedQuery);

  const handleSearchInputChange = (query: string) => {
    setInputQuery(query);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(inputQuery);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [inputQuery]);

  useEffect(() => {
    if (allPosts.length === 0) return;

    const results =
      debouncedQuery.length > 3
        ? allPosts.filter((post) =>
            post.title
              .toLocaleLowerCase()
              .includes(debouncedQuery.toLocaleLowerCase())
          )
        : allPosts;
    setSearchQuery(debouncedQuery);
    setFilteredPosts(results);

    if (
      (debouncedQuery.length > 3 && debouncedQuery !== prevQuery.current) ||
      debouncedQuery.length <= 3
    ) {
      setPage(1);
    }

    prevQuery.current = debouncedQuery;
  }, [debouncedQuery, setSearchQuery, posts, allPosts, setPage]);

  const pageCount = Math.max(Math.ceil(filteredPosts.length / postsPerPage), 1);

  console.log(pageCount);
  console.log(filteredPosts);

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
        }}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <Search onSearch={handleSearchInputChange} value={inputQuery} />
      </div>

      <Grid container spacing={2}>
        {paginatedPosts.map((post) => (
          <Grid key={post.id} item xs={4}>
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>

      {pageCount > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <BasicPagination
            page={page}
            count={pageCount}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
