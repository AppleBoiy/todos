import React from 'react';
import styles from './TodoList.module.css';

interface Todo {
    id: string;
    text: string;
}

interface TodoListProps {
    todos: Todo[];
    editTodo: (id: string, text: string) => void;
    deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, editTodo, deleteTodo}) => (
    <ul className={styles.todoList}>
        {todos.map((todo) => (
            <li key={todo.id} className={styles.todoItem}>
                {todo.text}
                <div>
                    <button className={`${styles.button} ${styles.editButton}`} onClick={() => {
                        const newText = prompt("Edit todo:", todo.text);
                        if (newText) {
                            editTodo(todo.id, newText);
                        }
                    }}>Edit
                    </button>
                    <button className={`${styles.button} ${styles.deleteButton}`}
                            onClick={() => deleteTodo(todo.id)}>Delete
                    </button>
                </div>
            </li>
        ))}
    </ul>
);

export default TodoList;
