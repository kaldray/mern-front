import React, { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:8080/movies", { method: "GET" }).then((res) =>
      res.json().then((response) => console.log(response))
    );
  });
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
