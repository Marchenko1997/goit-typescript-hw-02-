
import PropTypes from 'prop-types';
import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onLoadMore, hasMoreImages}) => {
  return (
    <div className={css.containerloadmore}>  {hasMoreImages && (<button onClick ={onLoadMore} className={css.loadmorebtn}>Load More</button>)}

    </div>
  )
}

LoadMoreBtn.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    hasMoreImages: PropTypes.bool.isRequired,
  };

export default LoadMoreBtn