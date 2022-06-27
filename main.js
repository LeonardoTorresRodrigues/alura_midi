function playAudio(idAudio) {
  const element = document.querySelector(idAudio);

  if(element === null) {
    alert('Elemento não encontrado');
  };

  if(element != null) {
    if(element.localName === 'audio') {
      element.play();
    };
  };
};
const keysList = document.querySelectorAll('.tecla');

for (let i = 0; i < keysList.length; i++) {
  const key = keysList[i];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function () {
    playAudio(idAudio);
  };

  key.onkeydown = function (event) {
    if(event.code === "Enter" || event.code === "Space") {
      key.classList.add('ativa');
    };
  };

  key.onkeyup = function () {
    key.classList.remove('ativa');
  };
};
