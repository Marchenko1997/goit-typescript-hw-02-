
import PropTypes from 'prop-types';

const LoadMoreBtn = ({onLoadMore, hasMoreImages}) => {
  return (
    <>  {hasMoreImages && (<button onClick ={onLoadMore}>Load More</button>)}

    </>
  )
}

LoadMoreBtn.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    hasMoreImages: PropTypes.bool.isRequired,
  };

export default LoadMoreBtn