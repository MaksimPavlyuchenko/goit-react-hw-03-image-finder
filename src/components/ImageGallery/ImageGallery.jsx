import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryStyled } from './ImageGallery.styled';

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
