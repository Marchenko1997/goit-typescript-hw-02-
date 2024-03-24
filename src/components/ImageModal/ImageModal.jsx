import Modal from 'react-modal';
import PropTypes from 'prop-types';
import css from './ImageModal.module.css'

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

const ImageModal = ({ isOpen, onRequestClose, imageUrl, altText }) => {
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

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired, 
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired 
  };

export default ImageModal