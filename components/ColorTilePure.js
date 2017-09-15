import PropTypes from 'prop-types';
import { PureComponent } from 'react';

export default class ColorTilePure extends PureComponent {
  remove = () => {
    const { removeHandler, color } = this.props;
    removeHandler(color.hex);
  }

  render() {
    const { displayKey, color } = this.props;
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
        >
          {displayKey}
        </div>
      </li>
    );
  }
}

ColorTilePure.propTypes = {
  removeHandler: PropTypes.func.isRequired,
  color: PropTypes.shape({
    hex: PropTypes.string,
  }).isRequired,
  displayKey: PropTypes.string.isRequired,
};
