import axios from 'axios';

export async function fetchGallery(query, currentPage) {
  const API_KEY = '42408826-646f1c33dda85bc33c99aac2a';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const url = `${BASE_URL}${END_POINT}`;

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: currentPage,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
