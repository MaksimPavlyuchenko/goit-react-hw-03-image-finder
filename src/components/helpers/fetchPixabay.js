const BASE_URL = 'https://pixabay.com/api/';
const KEY_PIXABAY = '35821375-3a14f4eca52135baa3bb1fa80';

const searchParams = new URLSearchParams({
  key: KEY_PIXABAY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
  page: 1,
});

export const fetchPixabay = async searchValue => {
  const result = await fetch(`${BASE_URL}?${searchParams}&q=${searchValue}`);
  const arrayImage = await result.json();

  return arrayImage.hits;
};

export default fetchPixabay;