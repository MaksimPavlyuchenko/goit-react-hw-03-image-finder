import { Component } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalStyled></ModalStyled>
      </Overlay>
    );
  }
}
export default Modal;
