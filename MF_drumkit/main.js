//
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  //
  this.classList.remove('playing');
}

// associates key pressing with data-key
 function playSound(e){
  // selects audio attribue associated with keydown, and targets its element
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  // plays the audio element associated with keydown


  key.classList.add('playing');
  audio.play();
  audio.currentTime = 0;

};


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// associates key pressing with data-key
window.addEventListener("keydown", playSound);
