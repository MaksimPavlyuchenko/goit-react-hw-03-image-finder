import { Component } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount = () => {
    console.log('Mount');
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  };
  componentWillUnmount = () => {
    console.log('UNmount');
    window.removeEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  };

  render() {
    return (
      <Overlay>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Overlay>
    );
  }
}
export default Modal;
