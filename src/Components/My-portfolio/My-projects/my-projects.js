import ToDo from './To-Do/to-do';

function MyProjects({ CallToDo }) {
  return (
    <div id="to-do">
      <ToDo onClick={CallToDo} />
    </div>
  );
}

export default MyProjects;
