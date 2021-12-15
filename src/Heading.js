import PropTypes from 'prop-types';

const Heading = ({ type: HeadingElement, children }) => {
  return (
    <HeadingElement className="headingElementsFont">
      {children}
    </HeadingElement>
  );
}

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  children: PropTypes.node,
}

export default Heading;