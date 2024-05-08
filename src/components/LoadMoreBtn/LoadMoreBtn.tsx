

import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  onLoadMore: () => void;
  hasMoreImages: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({onLoadMore, hasMoreImages}) => {
  return (
    <div className={css.containerloadmore}>  {hasMoreImages && (<button onClick ={onLoadMore} className={css.loadmorebtn}>Load More</button>)}

    </div>
  )
}



export default LoadMoreBtn