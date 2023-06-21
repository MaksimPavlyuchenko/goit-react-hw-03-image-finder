import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY_PIXABAY = '35821375-3a14f4eca52135baa3bb1fa80';

const searchParams = new URLSearchParams({
  key: KEY_PIXABAY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

function fetchPixabay(searchValue, pageNumber) {
  const response = axios.get(
    `${BASE_URL}?q=${searchValue}&page=${pageNumber}&${searchParams}`
  );

  return response;
}

export default fetchPixabay;
