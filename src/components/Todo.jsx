import React, { useRef, useState, useEffect } from "react";
import { BookCheck } from "lucide-react";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todo, setTodo] = useState(localStorage.getItem("todo") ? JSON .parse(localStorage.getItem("todo")) : []);

  const inputRef = useRef();

// ! Add function 

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === " ") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };

    setTodo((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  // ! Delete function 
  const deleteTodo = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };


  // ! Toggle function 
  const toggle = (id)=>{ 

    setTodo((prevTodos)=>{

      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo ; 
      })
    })

  }

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todo));
    console.log(todo); 

  }, [todo])


  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl ">
      {/*  Title  */}
      <div className="flex items-center mt-7 gap-2 justify-center ">
        <BookCheck size={40} />
        <h1 className="text-3xl font-semibold "> T0-Do List </h1>
      </div>

      {/*  Input Box */}
      <div className="flex items-center my-7 bg-gray-300 rounded-full ">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your Task "
          className="bg-transparaent border-0 outline-none flex-1 h-14  pl-6 pr-2 placeholder:text-slate-600 "
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600  w-32 h-14  text-white text-lg font-md cursor-pointer "
        >
          {" "}
          Add +{" "}
        </button>
      </div>

      {/*  Todo list  */}
      <div>
        {todo.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isCompleted={item.isCompleted}
              deleteTodo={deleteTodo}
              toggle= {toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
