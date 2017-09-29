import { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class TodoItemObserver extends Component {
  onClick = (id) => {
    const { store } = this.props;
    store.setClass(id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div
        role="button"
        tabIndex="0"
        onClick={() => this.onClick(todo.id)}
        className={`todo ${todo.className}`}
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

TodoItemObserver.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }).isRequired,
};


TodoItemObserver.wrappedComponent.propTypes = {
  store: PropTypes.shape({
    setClass: PropTypes.func.isRequired,
  }).isRequired,
};

