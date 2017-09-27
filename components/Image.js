import PropTypes from 'prop-types';

function Image({ alt, src }) {
  return (
    <div>
      <img alt={alt} src={src} />
    </div>
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Image;
