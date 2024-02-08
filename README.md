```markdown
# Todo List App

A simple Todo List application built with React that allows users to add, edit, and delete tasks. Tasks can have a status (completed or incomplete) and a priority (low/medium/high), each represented by a unique color. The application provides basic functionality to manage tasks and includes a filtering system based on priority.

## Features

- Display a list of tasks with their respective status (completed or not completed).
- Each task has options to mark as completed or delete.
- Counters for total tasks and completed tasks.
- Add a new task.
- Edit an existing task.
- Mark a task as completed.
- Delete a task.
- Filter tasks based on priority.
- Local storage is used to persist tasks even if the user refreshes the page.

## Technical Details

- Utilizes React for building UI components.
- State management is handled with React hooks (useState, useEffect).
- Design for a seamless user experience.
- Styling is done using external CSS for a clean and user-friendly interface.
- Tasks and their details are stored in local storage for persistence.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Robin-Ibn-Nur/Simple-ToDo-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-list-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The app will be accessible at [http://localhost:5173/](http://localhost:5173/).

## Usage

- Add a new task by entering text in the input field and clicking the "Add Task" button.
- Edit a task by clicking on the task text and modifying it.
- Mark a task as completed by clicking on the checkbox next to it.
- Delete a task by clicking the delete button.
- Filter tasks based on priority using the dropdown menu.

## Contributions

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or create a pull request.
