import React, {useState} from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
    const [text, setText] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter new todo"
                required
            />
            <button type="submit" className={styles.button}>Add</button>
        </form>
    );
}

export default TodoForm;
