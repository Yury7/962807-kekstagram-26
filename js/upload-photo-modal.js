import { isEscapeKey } from './util.js';

const uploadPictureForm = document.querySelector('.img-upload__overlay');
const uploadPictureButton = document.querySelector('#upload-file');
const closePictureFormButton = document.querySelector('#upload-cancel');

const scaleControl = document.querySelector('.scale__control--value');
const effectItemDefault = document.querySelector('#effect-none');
const hashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const picturePreview = document.querySelector('.img-upload__preview img');


const onPictureFormEscKeyDown = (event) => {
  if (isEscapeKey(event)) {
    if (document.activeElement === hashtag) {return;}
    event.preventDefault();
    onClosePictureFormButtonClick();
  }
};

const resetPictureFormDefaults = () => {
  scaleControl.value = '55%'; // text
  effectItemDefault.checked = true; // radio
  hashtag.placeholder = '#ХэшТег'; // input
  textDescription.placeholder = 'Ваш комментарий...'; // textarea
  picturePreview.src = '';
};

function onUploadPictureButtonClick() {
  uploadPictureForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closePictureFormButton.addEventListener('click', onClosePictureFormButtonClick);
  document.addEventListener('keydown', onPictureFormEscKeyDown);
}

function onClosePictureFormButtonClick() {
  uploadPictureForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureFormEscKeyDown);
  closePictureFormButton.removeEventListener('click', onClosePictureFormButtonClick);
  resetPictureFormDefaults();
}

uploadPictureButton.addEventListener('change', onUploadPictureButtonClick);
