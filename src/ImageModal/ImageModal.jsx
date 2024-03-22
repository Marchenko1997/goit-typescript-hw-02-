import Modal from 'react-modal';
import PropTypes from 'prop-types';

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

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    ariaHideApp={false}
    style={customStyles}
><div className="modal-content">
        <img src={imageUrl} alt="Big" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div> </Modal>
  )
}

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired, 
    imageUrl: PropTypes.string.isRequired 
  };

export default ImageModal