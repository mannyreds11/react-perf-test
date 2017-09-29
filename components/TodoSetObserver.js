import { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import TodoItemObserver from './TodoItemObserver';

@inject('store') @observer
class TodoSetObserver extends Component {
  render() {
    const { store } = this.props;
    const todoItems = store.todos.map(todo => (<TodoItemObserver key={todo.id} todo={todo} />));

    return (
      <div className="profile-set">
        { todoItems }
      </div>
    );
  }
}

TodoSetObserver.wrappedComponent.propTypes = {
  store: PropTypes.shape({
    setClass: PropTypes.func.isRequired,
  }).isRequired,
};


export default TodoSetObserver;
