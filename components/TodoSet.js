import TodoItem from './TodoItem';

function TodoSet() {
  const todos = [
    { id: 0, todo: 'wash car' },
    { id: 1, todo: 'do groceries' },
    { id: 2, todo: 'clean room' },
    { id: 3, todo: 'take dog out' },
    { id: 4, todo: 'eat' },
  ];
  const todoItems = todos.map(todo => (<TodoItem key={todo.id} todo={todo} />));

  return (
    <div className="profile-set">
      { todoItems }
    </div>
  );
}

export default TodoSet;
