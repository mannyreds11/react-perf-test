import { action, observable } from 'mobx';

let store = null;

export class MainStore {
  @observable selectedTodo;
  @observable todos = [
    { id: 0, todo: 'wash car', className: '' },
    { id: 1, todo: 'do groceries', className: '' },
    { id: 2, todo: 'clean room', className: '' },
    { id: 3, todo: 'take dog out', className: '' },
    { id: 4, todo: 'eat', className: '' },
  ];

  @action setClass = (id) => {
    // clean all previous
    for (const todo of this.todos) {
      if (todo.className === 'selected') {
        todo.className = '';
      }
    }
    this.todos[id].className = 'selected';
  }

  @action setSelectedTodo = (todo) => {
    this.selectedTodo = todo;
  }
}

export default function initStore(isServer) {
  if (isServer && typeof window === 'undefined') {
    return new MainStore(isServer);
  }

  if (store === null) {
    store = new MainStore(isServer);
  }

  return store;
}
