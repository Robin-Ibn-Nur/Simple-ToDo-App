import Task from './Task';
import FilterAndTask from './FilterAndTask';
import InputGroup from './InputGroup';
import useTodoState from './useTodoState';

const TodoList = () => {
    const {
        tasks,
        newTask,
        filterPriority,
        addTask,
        deleteTask,
        toggleComplete,
        changePriority,
        changeText,
        filterTasks,
        filteredTasks,
        setNewTask,
        setFilterPriority,
    } = useTodoState();

    return (
        <div className="container">
            <h1 className="heading">Todo List</h1>

            <InputGroup addTask={addTask} setNewTask={setNewTask} newTask={newTask} />

            <FilterAndTask filterTasks={filterTasks} tasks={tasks} />

            <ul className="task-list">
                {filteredTasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        changePriority={changePriority}
                        changeText={changeText}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
