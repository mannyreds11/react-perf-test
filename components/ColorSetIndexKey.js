import { Component } from 'react';
import Perf from 'react-addons-perf';
import ColorTile from './ColorTile';
import { colors } from '../env/config';

export default class ColorSetIndexKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors,
    };
  }

  componentDidMount() {
    window.perf = Perf;
  }

  removeHandler = (hex) => {
    const newColors = this.state.colors.filter(color => color.hex !== hex);
    this.setState({ colors: newColors });
  }

  render() {
    const style = {
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };

    let colorTiles;
    if (this.state.colors) {
      /* eslint-disable react/no-array-index-key */
      colorTiles = this.state.colors.map((color, index) =>
        (<ColorTile
          key={index}
          displayKey={index}
          color={color}
          removeHandler={this.removeHandler}
        />)
      );
      /* eslint-disable react/no-array-index-key */
    }

    return (
      <div className="container">
        <ul className="colors-container">
          { colorTiles }
        </ul>
        <style jsx>{`
          .container {
            text-align: center;
          }

          .colors-container {
            list-style-type: none;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    );
  }
}
