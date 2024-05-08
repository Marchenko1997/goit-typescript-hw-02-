import Modal from 'react-modal';
import css from './ImageModal.module.css';

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
  altText: string;
}

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      backgroundColor: 'transparent', 
    }
  };

const ImageModal: React.FC<ImageModalProps>  = ({ isOpen, onRequestClose, imageUrl, altText }) => {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    ariaHideApp={false}
    style={customStyles}
><div className={css.modalcontent}>
        <img src={imageUrl} alt="Big" style={{ maxWidth: '1000px', maxHeight: '800px' }} />
        <p className={css.alttext}>{altText}</p> 
      </div> </Modal>
  )
}


export default ImageModal