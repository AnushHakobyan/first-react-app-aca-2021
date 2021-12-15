import PropTypes from 'prop-types';

const Content = ({ titleComponent: Component }) => {
  return (
    <section>
      <Component />
    </section>
  );
};

Content.propTypes = {
  titleComponent: PropTypes.elementType,
};

export default Content;