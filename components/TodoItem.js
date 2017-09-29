import { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class TodoItem extends Component {
  onClick = (id) => {
    const { store } = this.props;
    store.setSelectedTodo(id);
  }

  render() {
    const { todo, store } = this.props;

    let selectedClass = '';
    if (store.selectedTodo === todo.id) {
      selectedClass = 'selected';
    }

    return (
      <div
        role="button"
        tabIndex="0"
        onClick={() => this.onClick(todo.id)}
        className={`todo ${selectedClass}`}
      >
        todo: { todo.todo }
        <style jsx>{`
          .todo {
            margin: 1rem;
            border-style: solid;
          }
          .selected {
            background-color: yellow;
          }
        `}</style>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

TodoItem.wrappedComponent.propTypes = {
  store: PropTypes.shape({
    setSelectedTodo: PropTypes.func.isRequired,
  }).isRequired,
};
