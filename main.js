function playAudio(idAudio) {
  document.querySelector(idAudio).play();
}
const keysList = document.querySelectorAll('.tecla');

for (let countdown = 0; countdown < keysList.length; countdown++) {
  const key = keysList[countdown];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function () {
    playAudio(idAudio);
  };
};