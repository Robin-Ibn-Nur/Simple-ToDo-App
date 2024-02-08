const InputGroup = ({ newTask, setNewTask, addTask }) => {
    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default InputGroup;