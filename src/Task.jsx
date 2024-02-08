import React, { useState } from 'react';
import "./Task.css"

const Task = ({ task, deleteTask, toggleComplete, changePriority, changeText }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSaveEdit = () => {
        setEditMode(false);
        changePriority(task.id, task.priority);
        changeText(task.id, editedText);
    };

    const handleCancelEdit = () => {
        setEditMode(false);
    };

    const getPriorityColor = () => {
        switch (task.priority) {
            case 'low':
                return 'green';
            case 'medium':
                return 'yellow';
            case 'high':
                return 'red';
            default:
                return 'black';
        }
    };

    return (
        <li className='task-item'
            style={{
                borderLeft: `5px solid ${getPriorityColor()}`,
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="checkbox"
                />
                {editMode ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                ) : (
                    <span style={{ marginRight: '10px' }}>{task.text}</span>
                )}
                <span>Priority:</span>
                <select
                    onChange={(e) => changePriority(task.id, e.target.value)}
                    value={task.priority}
                    className="priority-select"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            {editMode ? (
                <>
                    <button onClick={handleSaveEdit} style={{ marginLeft: '5px' }}>
                        Save
                    </button>
                    <button onClick={handleCancelEdit} style={{ marginLeft: '5px' }}
                        className='cancel-btn'
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={handleEdit}
                        className='edit-btn'
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="delete-btn"
                    >
                        Delete
                    </button>
                </>
            )}
        </li>
    );
};

export default Task;