import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchGallery } from './js/pixabay-api.js';

const refs = {
  formEL: document.querySelector('.img-search-form'),
  loaderEl: document.querySelector('.loader'),
  galleryEl: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.button-load'),
};

refs.formEL.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
}
