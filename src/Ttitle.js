import PropTypes from 'prop-types';
import Heading from './Heading';

const Title = ({ name = 'Anush' }) => (
  <Heading type="h3">
    {name && <p>{name}'s Todo List!</p>}
  </Heading>
);

Title.propTypes = {
  name: PropTypes.string,
};


export default Title;
