import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css'

type LoaderProps = {};

const Loader: React.FC<LoaderProps>  = () => {
  return (
    <div className={css.loaderwrapper}>
      <Audio
        height={300}
        width={300}
        // radius={9}
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
