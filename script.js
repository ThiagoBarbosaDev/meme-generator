const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

const imageInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

function handleTextInputToMeme() {
  textInput.addEventListener('input', () => {
    memeText.innerHTML = textInput.value;
  });
}

handleTextInputToMeme();

imageInput.addEventListener('change', (e) => {
  const reader = new FileReader();
  const image = imageInput.files[0];

  console.log(image);

  reader.addEventListener('load', () => {
    console.log(reader)
    console.log(reader.result)
    memeImage.setAttribute('src', reader.result);
  });

  reader.readAsDataURL(image);
});
