import PropTypes from 'prop-types';

const Content = ({ user, renderTitle }) => {
  return (
    <section>
      {renderTitle(user)}
    </section>
  );
};

Content.propTypes = {
  titleComponent: PropTypes.elementType,
  renderTitle: PropTypes.func,
};

export default Content;