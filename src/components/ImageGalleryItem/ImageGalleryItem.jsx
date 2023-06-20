import { Component } from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isShow: false,
  };

  componentWillUnmount = () => {
    console.log('Unmount');
    this.props.onReset();
  };

  onOpenHendler = () => {
    this.setState({ isShow: true });
  };

  onCloseHendler = () => {
    this.setState({ isShow: false });
  };

  render() {
    const { smallFormat, largeFormat } = this.props;
    const { isShow } = this.state;
    return (
      <ImageGalleryItemStyled>
        <Image src={smallFormat} alt="" onClick={this.onOpenHendler} />
        {isShow && (
          <Modal onClick={this.onCloseHendler}>
            {<img src={largeFormat} alt="" />}
          </Modal>
        )}
      </ImageGalleryItemStyled>
    );
  }
}
export default ImageGalleryItem;
