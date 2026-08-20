import {useState} from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(new Array());
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(e.currentTarget.value);
    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks((prevTasks) => [...prevTasks, newTask]);

            setNewTask("");
        }

    }

    function deleteTask(index: number) {

        const updatedTasks = tasks.filter((_, i) => i !== index);

        setTasks(updatedTasks);
    }

    function moveTaskUp(index: number) {
        if (index > 0) {
            const updatedTasks = [...tasks];

            [ updatedTasks[index], updatedTasks[index - 1] ] =
            [ updatedTasks[index - 1], updatedTasks[index] ];

            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index: number) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];

            [ updatedTasks[index], updatedTasks[index + 1] ] =
                [ updatedTasks[index + 1], updatedTasks[index] ];

            setTasks(updatedTasks);
        }
    }

    return (
        <>

        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => handleInputChange(e)}
                />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, i) => (
                    <li key={i}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(i)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(i)}>
                            👆
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(i)}>
                            👇
                        </button>
                    </li>
                ))}
            </ol>
        </div>
        </>
    )
}

export default ToDoList;
