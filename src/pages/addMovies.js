import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Navigation";

const AddMovies = () => {
  const [movies, setMovies] = useState({});
  const title = useRef();
  const description = useRef();
  const url = useRef();
  const date = useRef();
  let navigate = useNavigate();

  const sendDataToDatabase = () => {
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      url.current.value === "" ||
      date.current.value === ""
    ) {
      return;
    }
    title.current.value = "";
    description.current.value = "";
    url.current.value = "";
    date.current.value = "";

    fetchDataToDatabase();
    navigate("/");
  };

  const fetchDataToDatabase = () => {
    fetch("http://localhost:8080/movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(movies),
    });
  };

  const storeDataMovieInState = () => {
    const allMovie = {
      title: title.current.value,
      description: description.current.value,
      imageUrl: url.current.value,
      realseDate: DatetoTimestamp(date.current.value),
    };
    setMovies(allMovie);
  };

  const DatetoTimestamp = (strDate) => {
    strDate = strDate.split("/");
    strDate = strDate.join("-");
    var datum = Date.parse(strDate);
    return datum / 1000;
  };

  return (
    <>
      <Nav></Nav>
      <div className="container">
        <h1>Todo List</h1>
        <form
          method="POST"
          action="http://localhost:8080/movies"
          onChange={storeDataMovieInState}
          onSubmit={sendDataToDatabase}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Tape something here"
            ref={title}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Tape something here"
            ref={description}
          />
          <label htmlFor="image">Affiche</label>
          <input
            ref={url}
            type="url"
            name="image"
            placeholder="Tape something here"
          />
          <label htmlFor="title">Date de Sortie</label>
          <input
            ref={date}
            type="date"
            name="title"
            placeholder="Tape something here"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddMovies;
