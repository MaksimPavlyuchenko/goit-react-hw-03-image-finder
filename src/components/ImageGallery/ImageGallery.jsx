import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = props => {
  const { imgArray } = props;

  return (
    <ImageGalleryStyled>
      {imgArray.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallFormat={webformatURL}
            largeFormat={largeImageURL}
          />
        );
      })}
    </ImageGalleryStyled>
  );
};
export default ImageGallery;

ImageGallery.propTypes = { imgArray: PropTypes.array.isRequired };
