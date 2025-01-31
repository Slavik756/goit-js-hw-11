import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a');
let page = 1;

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  event.target.elements.query.value = '';

  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  fetchImages(query, page)
    .then(({ hits }) => {
      setTimeout(() => {
        loader.style.display = 'none';
        if (!hits || hits.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          renderGallery(hits);
          lightbox.refresh();
        }
      }, 1000);
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({ title: 'Error', message: 'Failed to fetch images' });
    });
});