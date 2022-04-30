const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function handleTextInputToMeme() {
  textInput.addEventListener('input', () => {
    memeText.innerHTML = textInput.value;
  });
}

handleTextInputToMeme();
