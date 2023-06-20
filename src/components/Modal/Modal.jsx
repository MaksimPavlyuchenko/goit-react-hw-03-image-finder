import { Component } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.onKeydown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onKeydown);
  };

  onKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <Overlay onClick={this.onClickBackdrop}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Overlay>
    );
  }
}
export default Modal;
