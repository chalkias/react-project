import { useState } from "react";

export default function ToDoList() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, inputValue]);
        setInputValue("");
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>Meine To-Do Liste</h1>
            <form>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>To-Do hinzufügen</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>To-Do löschen</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}