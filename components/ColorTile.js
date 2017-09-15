import PropTypes from 'prop-types';
import { Component } from 'react';

export default class ColorTile extends Component {
  remove = () => {
    const { removeHandler, color } = this.props;
    removeHandler(color.hex);
  }

  render() {
    const { color } = this.props;
    const { hex } = color;
    const style = {
      width: '6rem',
      height: '6rem',
      background: hex,
      margin: '0.5rem',
      cursor: 'pointer',
    };
    return (
      <li
        style={style}
      >
        <div
          role="button"
          tabIndex="0"
          onClick={this.remove}
        />
        {/* {displayKey} */}
      </li>
    );
  }
}

ColorTile.propTypes = {
  removeHandler: PropTypes.func.isRequired,
  color: PropTypes.shape({
    hex: PropTypes.string,
  }).isRequired,
};
