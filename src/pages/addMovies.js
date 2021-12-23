import { nanoid } from "nanoid";
import React, { useState, useRef } from "react";

const AddMovies = () => {
  const [todos, setTodo] = useState([]);
  const [movies, setMovies] = useState({});

  const title = useRef();
  const description = useRef();
  const url = useRef();
  const date = useRef();

  const addTodos = (event) => {
    event.preventDefault();
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      url.current.value === "" ||
      date.current.value === ""
    ) {
      return;
    }
    const allTodos = [...todos, title.current.value];
    setTodo(allTodos);
    title.current.value = "";
    description.current.value = "";
    url.current.value = "";
    date.current.value = "";

    sendDataToDatabase();
  };

  const sendDataToDatabase = () => {
    fetch("http://localhost:8080/movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(movies),
    });
  };

  const exportMoviestoDatabase = (event) => {
    event.preventDefault();
    const allMovie = {
      title: title.current.value,
      descriptiton: description.current.value,
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
    <div className="container">
      <h1>Todo List</h1>
      <form
        method="POST"
        action="http://localhost:8080/movies"
        onChange={exportMoviestoDatabase}
        onSubmit={addTodos}
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
      <div className="todo">
        <ul>
          {" "}
          {todos.map((todo) => (
            <li key={nanoid()}> {todo} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddMovies;
