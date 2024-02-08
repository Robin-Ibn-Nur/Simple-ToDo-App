const FilterAndTask = ({ filterTasks, tasks }) => {
    return (
        < >
            <div className='filter'>
                <label>Filter by Priority:</label>
                <select onChange={(e) => filterTasks(e.target.value)}>
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div className='task-length'>
                <p>Total Tasks: {tasks.length}</p>
                <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
                <p>Incomplete Tasks: {tasks.filter((task) => !task.completed).length}</p>
            </div>
        </>
    );
};

export default FilterAndTask;