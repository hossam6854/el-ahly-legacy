// components/EmptyState.js
import PropTypes from 'prop-types';

const EmptyState = ({ title, description }) => {
  return (
    <div className="text-center py-16">
      <h3 className="text-3xl font-semibold text-red-500">{title}</h3>
      <p className="text-gray-400 mt-3 text-lg">{description}</p>
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EmptyState;