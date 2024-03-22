
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onLoadMore, hasMoreImages }) => {
    return (
      <button onClick={onLoadMore} style={{ display: !hasMoreImages ? 'none' : 'block' }}>
        Load More
      </button>
    );
  };
  

LoadMoreBtn.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    hasMoreImages: PropTypes.bool.isRequired,
  };

export default LoadMoreBtn