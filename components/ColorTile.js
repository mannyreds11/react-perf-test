import PropTypes from 'prop-types';
import { Component } from 'react';

export default class ColorTile extends Component {
  remove = () => {
    const { removeHandler, color } = this.props;
    removeHandler(color.hex);
  }

  render() {
    const { color, displayKey } = this.props;
    const { hex } = color;
    const style = {
      width: '6rem',
      height: '6rem',
      background: hex,
      margin: '0.5rem',
      cursor: 'pointer',
    };
    return (
      <div
        role="button"
        tabIndex="0"
        onClick={this.remove}
      >
        <li
          style={style}
        >
          {displayKey}
        </li>
      </div>

    );
  }
}

ColorTile.propTypes = {
  displayKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  removeHandler: PropTypes.func.isRequired,
  color: PropTypes.shape({
    hex: PropTypes.string,
  }).isRequired,
};
