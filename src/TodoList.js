import React, {useEffect,useState} from "react";
import HOC from "./HOC";

const TodoList = ({data}) => {
  
     let renderTodos = data.map((todo) => {

        return (
            
            <div key={todo.userId}>
                <strong>{todo.title}</strong>
                </div>
        );

     });

    return (
        <div> 
            {renderTodos}
        </div>
    );
}

 
const SearchTodos = HOC(TodoList,"todos");

export default SearchTodos;