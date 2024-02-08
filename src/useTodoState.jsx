import { useState, useEffect } from "react";

const useTodoState = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filterPriority, setFilterPriority] = useState('all');

    useEffect(() => {
        let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    const addTask = () => {
        const date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hh = date.getHours();
        var minutes = date.getMinutes();
        var ss = date.getSeconds();
        var finalDate =
            dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;
        const newTaskObject = {
            id: finalDate,
            text: newTask,
            completed: false,
            priority: 'low',
        };
        let updatedTaskArr = [...tasks];
        updatedTaskArr.push(newTaskObject);
        setTasks(updatedTaskArr);
        localStorage.setItem('tasks', JSON.stringify(updatedTaskArr));
        setNewTask('');
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const toggleComplete = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const changePriority = (taskId, newPriority) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, priority: newPriority } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const changeText = (taskId, newText) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const filterTasks = (priority) => {
        setFilterPriority(priority);
    };

    const filteredTasks = tasks.filter((task) =>
        filterPriority === 'all' ? true : task.priority === filterPriority
    );

    return {
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
    };
};

export default useTodoState;
