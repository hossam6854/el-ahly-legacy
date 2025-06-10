// components/SearchInput.js
import PropTypes from 'prop-types';

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative w-full md:w-72 shadow-lg rounded-full overflow-hidden">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2.5 pl-10 pr-5 bg-black bg-opacity-50 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 border border-red-700 transition-all duration-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <svg
        className="absolute right-3 top-2.5 h-5 w-5 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: 'ابحث...',
};

export default SearchInput;