'use client';

import React, {useEffect, useState} from "react";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import styles from './page.module.css';

interface Todo {
    id: string;
    text: string;
}

const initialTodos: Todo[] = [
    {id: "1", text: "Learn React"},
    {id: "2", text: "Learn TypeScript"},
    {id: "3", text: "Learn Next.js"},
];

const hash = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = (hash << 5) - hash + text.charCodeAt(i);
        hash |= 0;
    }
    return hash.toString();
}

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos([...todos, {id: hash(`${text}${Date.now()}`), text}]);
    };

    const editTodo = (id: string, newText: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, text: newText} : todo));
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        setTodos(initialTodos);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Todo List</h1>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default Home;
