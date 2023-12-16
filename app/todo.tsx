"use client";
import { log } from "console";
import React, { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, settodos] = useState([
    { todoText: "todo 1", completed: false },
    { todoText: "todo 2", completed: true },
    { todoText: "todo 3", completed: false },
    { todoText: "todo 4", completed: true },
    { todoText: "todo 5", completed: false },
  ]);
  const onClickHandler = (newelm: any) => {
    console.log("new elm", newelm);
    const newTodo = todos.map((todo) => {
      console.log("todo", todo);
      if (todo.todoText == newelm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(newTodo);
    settodos(newTodo);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    settodos(newTodos);
    setTodo("");
  };
  const deleteTodo = (newTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == newTodo.todoText) return false;
      return true;
    });
    settodos(newTodos);
  };

  return (
    <>
      <h2>TODO</h2>
      <input
        placeholder="add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className="border-2 border-lime-950"
      />
      <button onClick={addTodo} className="border-2 border-lime-950">
        Add
      </button>

      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "red",
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
                className="border-2 border-cyan-950 m-4 p-1"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
