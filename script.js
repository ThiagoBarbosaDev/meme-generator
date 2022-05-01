const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

const imageInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

const memeContainer = document.querySelector('#meme-image-container');

function handleTextInputToMeme() {
  textInput.addEventListener('input', () => {
    memeText.innerHTML = textInput.value;
  });
}

handleTextInputToMeme();

imageInput.addEventListener('change', () => {
  const reader = new FileReader();
  const image = imageInput.files[0];

  console.log(image);

  reader.addEventListener('load', () => {
    console.log(reader);
    console.log(reader.result);
    memeImage.setAttribute('src', reader.result);
  });

  reader.readAsDataURL(image);
});

buttonFire.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
});

buttonEarth.addEventListener('click', () => {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
});

buttonWater.addEventListener('click', () => {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
});
