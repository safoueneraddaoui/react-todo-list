import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        // e.target.value contains new input from onChange
        // event for input elements
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault(); // prevents browser refresh
        // trim() gets rid of string whitespace
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <div>
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                type="text"
                name="task"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button variant="contained" type="submit" color="primary">Submit</Button>
        </form>
        </div>
    );
}

export default TodoForm;