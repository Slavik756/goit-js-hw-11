// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

const API_KEY = '48566659-7e3fac132ae4a1e98b5249d53';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1, perPage = 9) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
