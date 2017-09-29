import { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import Link from 'next/link';
import DevTools from 'mobx-react-devtools';
import initStore from '../stores/mainStore';
import TodoSet from '../components/TodoSet';
import TodoSetObserver from '../components/TodoSetObserver';

export default class Mobx extends Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    initStore(isServer);
    return { isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <DevTools />
          <h2>Mobx React Devtools</h2>
          <Link href="/"><a>Back</a></Link>
          <h3>Observing class:</h3>
          <TodoSet />
          <hr />
          <h3>Observing todos:</h3>
          <TodoSetObserver />
        </div>
      </Provider>
    );
  }
}

Mobx.propTypes = {
  isServer: PropTypes.bool.isRequired,
};
