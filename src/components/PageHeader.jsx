// components/PageHeader.js
import PropTypes from 'prop-types';

const PageHeader = ({ title }) => {
  return (
    <h1 className="text-5xl md:text-6xl font-black text-center md:text-right bg-clip-text text-transparent bg-gradient-to-r from-[#C8102E] to-[#a00c22] drop-shadow-lg">
      {title}
    </h1>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;