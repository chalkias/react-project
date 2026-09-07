import Home from './Home';
import Navigation from './Navigation';
import TaskList from './TaskList';
import ToDoList from './ToDoList';

export default function App() {

    const tasks = [
        {id: 1, description: "Aufgabe 1", completed: true},
        {id: 2, description: "Aufgabe 2", completed: false},
        {id: 3, description: "Aufgabe 3", completed: true}
    ];
    return (
        <>
            <header id="header">
                <Navigation />
            </header>
            <main id="main">
                <Home />
                <TaskList tasks={tasks} />
                <ToDoList />
            </main>
        </>
    );
}